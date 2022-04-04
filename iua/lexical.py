import numpy as np
import pandas as pd


def determine_keywords_count(tweets: pd.Series, keywords: list[str]) -> tuple[int, np.ndarray]:
    """
    Counts and computes mask of form the tweets that has .
    Args:
        tweets: each entry is list of lemmas (words after lemmatization)
        keywords: the words that are counted (lemmas)

    Returns:

    """
    mask = []
    count = 0
    for tweet in tweets:
        kw_found = False
        for keyword in keywords:
            if keyword in tweet:
                count += 1
                mask.append(True)
                kw_found = True
                break
        if not kw_found:
            mask.append(False)
    return count, np.array(mask)


def fix_apostrophes(tweets):
    strange_apostrophe = "’"
    normal_apostrophe = "'"
    tweets["tweet"] = tweets["tweet"].str.replace(strange_apostrophe, normal_apostrophe)
    return tweets


def determine_keywords_count_naive(tweets: pd.DataFrame, keywords: list[str]) -> tuple[int, np.ndarray]:
    """
    Naive version of word count (deprecated)
    """
    count = 0
    mask = []
    text_tweets = tweets["tweet"]
    for tweet in text_tweets:
        kw_found = False
        for keyword in keywords:
            if keyword in tweet:
                count += 1
                kw_found = True
                mask.append(True)
                break
        if not kw_found:
            mask.append(False)
    return count, np.array(mask)
