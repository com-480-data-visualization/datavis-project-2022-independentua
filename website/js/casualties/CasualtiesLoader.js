class CasualtiesLoader {
    casualties;
    date_to_civilians_killed;
    date_to_children_killed;
    date_to_civilians_injured;
    date_to_children_injured;
    all;

    constructor(path) {
        this.path = path;
        this.all_groups = ["civilians-killed", "civilians-injured", "children-killed", "children-injured"]
    }

    async load_data() {
        this.casualties = await d3.csv(this.path);
        // this callback is necessary in this function if I want to store the data in the line above
        await this._extract_data()
    }

    _extract_data() {
        this.date_to_civilians_killed = this._extract_one_data("civilians_killed");
        this.date_to_children_killed = this._extract_one_data("children_killed");
        this.date_to_civilians_injured = this._extract_one_data("civilians_injured");
        this.date_to_children_injured = this._extract_one_data("children_injured");
        let all_data = [this.date_to_civilians_killed, this.date_to_civilians_injured, this.date_to_children_killed, this.date_to_children_injured];
        this.all = this.all_groups.map(function (group_name, index) {
                return {
                    name: group_name,
                    values: all_data[index]
                }
            }
        );
    }

    _extract_one_data(column_name) {
        const parseTime = d3.timeParse("%Y-%m-%d");
        return new Map(
            this.casualties.map(
                object => {
                    return [parseTime(object["date"]), Number(object[column_name])]
                })
        )
    }

}