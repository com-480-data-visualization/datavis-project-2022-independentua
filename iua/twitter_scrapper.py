import argparse
import os
from datetime import date
from datetime import datetime

import pandas as pd


def init_empty_pandas():
    col_names_path = "../data/twitter_scrapping-configs/twint_col_names.pkl"
    dtypes_path = "../data/twitter_scrapping-configs/twint_dtypes.pkl"
    col_names = pd.read_pickle(col_names_path).to_list()
    dtypes = pd.read_pickle(dtypes_path).values
    df = pd.DataFrame(columns=col_names, dtype=dtypes)
    return df


def scrap_twitter(username: str, date_start: date, store: bool, output_file_path: str) -> pd.DataFrame:
    """
    Scraps tweets from certain date.
    The saving logic and data collection is implemented myself due to the bugs in the twint library.
    Args:
        username:
        date_start:
        store:
        output_file_path:

    Returns:

    """
    os.system("pip3 install --upgrade -q -e git+https://github.com/twintproject/twint.git@origin/master#egg=twint")
    import twint
    import nest_asyncio
    nest_asyncio.apply()

    c = twint.Config()
    c.Username = username
    c.Pandas = True
    c.Pandas_au = True
    # helps pull all the data
    c.Profile_full = True

    # file needed to know the search place to start after resuming (twint's solution)
    now = get_now_string()
    resume_path = f"./resume_file_run_{now}.txt"
    c.Resume = resume_path
    c.Hide_output = True
    result = init_empty_pandas()

    while True:
        twint.run.Search(c)
        single_search_res = twint.storage.panda.Tweets_df
        if single_search_res.empty:
            continue
        result = pd.concat([result, single_search_res], axis=0)
        last_date = datetime.strptime(result["date"].iloc[-1], "%Y-%m-%d %H:%M:%S").date()
        if last_date < date_start:
            break
    os.system(f"rm {resume_path}")
    result = result.iloc[::-1].set_index('id')
    result.loc[:, "date"] = pd.to_datetime(result.loc[:, "date"].values)
    result = result.loc[result.loc[:, "date"] > pd.to_datetime(date_start)]
    if store:
        result.to_csv(output_file_path)
    return result


def create_parser():
    parser = argparse.ArgumentParser(description="Scrap twitter")
    parser.add_argument("-n", "--twitter_account_name", type=str, help="Name of a twitter account")
    parser.add_argument("-s", "--start_date", type=str,
                        help="Date to start scrapping from in the form YYYY-mm-dd")
    return parser


def get_now_string():
    return datetime.now().strftime("%Y_%m_%d-%H:%M:%S")


if __name__ == "__main__":
    parser = create_parser()
    args = parser.parse_args()
    twitter_account_name = args.twitter_account_name
    start_date = datetime.strptime(args.start_date, "%Y-%m-%d").date()
    now = get_now_string()
    scrap_twitter(twitter_account_name, start_date, True, f"../data/{twitter_account_name}_run_{now}.csv")
