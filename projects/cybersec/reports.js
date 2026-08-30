const filters = document.querySelectorAll(".report-filter");
const reports = document.querySelectorAll(".report-card");

let selectedFilters = [];

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        const selectedTag = filter.dataset.filter;

        // "All" resets all filters
        if (selectedTag === "all") {

            selectedFilters = [];

            filters.forEach(button => {
                button.classList.remove("active");
            });

            filter.classList.add("active");

        } else {

            // Remove "All"
            filters[0].classList.remove("active");

            if (selectedFilters.includes(selectedTag)) {

                selectedFilters = selectedFilters.filter(
                    tag => tag !== selectedTag
                );

                filter.classList.remove("active");

            } else {

                selectedFilters.push(selectedTag);
                filter.classList.add("active");

            }

            // If nothing is selected, return to "All"
            if (selectedFilters.length === 0) {
                filters[0].classList.add("active");
            }
        }

        filterReports();
    });

});


function filterReports() {

    reports.forEach(report => {

        const tags = report.dataset.tags
            .split(",")
            .map(tag => tag.trim());

        // No filters = show everything
        if (selectedFilters.length === 0) {

            report.classList.remove("hidden");
            return;
        }

        // Show if the report has at least one selected tag
        const matches = selectedFilters.some(
            filter => tags.includes(filter)
        );

        report.classList.toggle("hidden", !matches);

    });

}