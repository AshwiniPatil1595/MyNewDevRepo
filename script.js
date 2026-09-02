/* =========================================
   DEVOPS ROADMAP
   ONE SHARED JAVASCRIPT FILE
========================================= */


document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       THEME
    ===================================== */

    const themeToggle =
        document.getElementById("themeToggle");

    const savedTheme =
        localStorage.getItem("devopsTheme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        if (themeToggle) {
            themeToggle.textContent = "☀️";
        }

    }


    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const isDark =
                document.body.classList.contains("dark");


            localStorage.setItem(
                "devopsTheme",
                isDark ? "dark" : "light"
            );


            themeToggle.textContent =
                isDark ? "☀️" : "🌙";

        });

    }


    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";


    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            const linkPage =
                link.getAttribute("href");


            if (linkPage === currentPage) {

                link.classList.add("active");

            }

        });


    /* =====================================
       ROADMAP PROGRESS
    ===================================== */

    const roadmapChecks =
        document.querySelectorAll(".roadmap-check");


    if (roadmapChecks.length > 0) {

        const storageKey =
            "devopsRoadmapProgress";


        let progress =
            JSON.parse(
                localStorage.getItem(storageKey)
            ) || {};


        const completedCount =
            document.getElementById("completedCount");

        const totalCount =
            document.getElementById("totalCount");

        const progressPercent =
            document.getElementById("progressPercent");

        const progressFill =
            document.getElementById("progressFill");


        totalCount.textContent =
            roadmapChecks.length;


        /* LOAD SAVED PROGRESS */

        roadmapChecks.forEach(check => {

            const id =
                check.dataset.id;


            if (progress[id] === true) {

                check.checked = true;

            }

        });


        /* UPDATE PROGRESS */

        function updateProgress() {

            let completed = 0;


            roadmapChecks.forEach(check => {

                if (check.checked) {

                    completed++;

                    progress[
                        check.dataset.id
                    ] = true;

                } else {

                    progress[
                        check.dataset.id
                    ] = false;

                }

            });


            const percentage =
                roadmapChecks.length === 0
                    ? 0
                    : Math.round(
                        (completed /
                        roadmapChecks.length) * 100
                    );


            completedCount.textContent =
                completed;


            progressPercent.textContent =
                percentage + "%";


            progressFill.style.width =
                percentage + "%";


            localStorage.setItem(
                storageKey,
                JSON.stringify(progress)
            );

        }


        roadmapChecks.forEach(check => {

            check.addEventListener(
                "change",
                updateProgress
            );

        });


        updateProgress();


        /* RESET */

        const resetButton =
            document.getElementById("resetProgress");


        if (resetButton) {

            resetButton.addEventListener(
                "click",
                () => {

                    const confirmed =
                        confirm(
                            "Are you sure you want to reset your roadmap progress?"
                        );


                    if (!confirmed) {
                        return;
                    }


                    progress = {};


                    localStorage.removeItem(
                        storageKey
                    );


                    roadmapChecks.forEach(
                        check => {
                            check.checked = false;
                        }
                    );


                    updateProgress();

                }
            );

        }


        /* =================================
           ROADMAP SEARCH
        ================================= */

        const searchInput =
            document.getElementById(
                "roadmapSearch"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                filterRoadmap
            );

        }


        /* =================================
           ROADMAP FILTER
        ================================= */

        const filterButtons =
            document.querySelectorAll(
                ".filter-btn"
            );


        filterButtons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    filterButtons.forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                    button.classList.add(
                        "active"
                    );


                    filterRoadmap();

                }
            );

        });


        function filterRoadmap() {

            const searchValue =
                searchInput
                    ? searchInput.value
                        .toLowerCase()
                        .trim()
                    : "";


            const activeFilter =
                document.querySelector(
                    ".filter-btn.active"
                );


            const filter =
                activeFilter
                    ? activeFilter.dataset.filter
                    : "all";


            document
                .querySelectorAll(
                    ".roadmap-section"
                )
                .forEach(section => {

                    const level =
                        section.dataset.level;


                    const text =
                        section.textContent
                            .toLowerCase();


                    const matchesSearch =
                        text.includes(
                            searchValue
                        );


                    const matchesFilter =
                        filter === "all" ||
                        level === filter;


                    if (
                        matchesSearch &&
                        matchesFilter
                    ) {

                        section.classList.remove(
                            "hidden"
                        );

                    } else {

                        section.classList.add(
                            "hidden"
                        );

                    }

                });

        }

    }


    /* =====================================
       RESOURCE SEARCH
    ===================================== */

    const resourceCards =
        document.querySelectorAll(
            ".resource-card"
        );


    if (resourceCards.length > 0) {

        const resourceSearch =
            document.getElementById(
                "resourceSearch"
            );


        const resourceFilters =
            document.querySelectorAll(
                ".resource-filter"
            );


        let activeCategory =
            "all";


        function filterResources() {

            const search =
                resourceSearch
                    ? resourceSearch.value
                        .toLowerCase()
                        .trim()
                    : "";


            resourceCards.forEach(card => {

                const text =
                    card.textContent
                        .toLowerCase();


                const category =
                    card.dataset.category;


                const matchesSearch =
                    text.includes(search);


                const matchesCategory =
                    activeCategory === "all" ||
                    category === activeCategory;


                if (
                    matchesSearch &&
                    matchesCategory
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            });

        }


        if (resourceSearch) {

            resourceSearch.addEventListener(
                "input",
                filterResources
            );

        }


        resourceFilters.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    resourceFilters.forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                    button.classList.add(
                        "active"
                    );


                    activeCategory =
                        button.dataset.category;


                    filterResources();

                }
            );

        });

    }

});