
    // APIs URLS
    const deliverableUrl = "https://arcanix.ai/version-31b2p/api/1.1/obj/Deliverable/[uid]";
    const dependencyUrl = "https://arcanix.ai/version-31b2p/api/1.1/obj/Dependency/[uid]";
    const updateActivityEndpoint = "https://arcanix.ai/version-31b2p/api/1.1/wf/update_activity_time_take"
    const updateDeliverableEndpoint = "https://arcanix.ai/version-31b2p/api/1.1/wf/update_deliverable"
    const activityUrl = "https://arcanix.ai/version-31b2p/api/1.1/obj/Activity/[uid]";


    /**VARIABLES */
    var day = 24 * 36e5, // milliseconds in a day
        today = Math.floor(Date.now() / day) * day;  // current day in milliseconds

    var detailChart;
    var image_assets = {
        avatar1_icon: 'https://69906f258885a4f4ebf7e70d3efa75db.cdn.bubble.io/f1721643639754x508379335165734850/avatar_1.svg?_gl=1*by4238*_gcl_aw*R0NMLjE3MTYzNzQxMjYuQ2p3S0NBandyN2F5QmhBUEVpd0E2RUlHeEFmWDBJbG1DTEJHU3NnNnB1TnZ0OUpqUzRCMkR1d290N3VOTmp5ZHV0WTd5bURaaEMtT1R4b0MxY29RQXZEX0J3RQ..*_gcl_au*Nzk1NDMyODI4LjE3MTYxMzI0OTE.*_ga*MTE5NjEwNzM1OC4xNzE1MzM0ODg1*_ga_BFPVR2DEE2*MTcyMTYyOTYwNy4zNS4xLjE3MjE2NTE3OTQuNjAuMC4w',
        avatar2_icon: 'https://69906f258885a4f4ebf7e70d3efa75db.cdn.bubble.io/f1721643644272x357221151790066300/avatar_2.svg?_gl=1*gg8key*_gcl_aw*R0NMLjE3MTYzNzQxMjYuQ2p3S0NBandyN2F5QmhBUEVpd0E2RUlHeEFmWDBJbG1DTEJHU3NnNnB1TnZ0OUpqUzRCMkR1d290N3VOTmp5ZHV0WTd5bURaaEMtT1R4b0MxY29RQXZEX0J3RQ..*_gcl_au*Nzk1NDMyODI4LjE3MTYxMzI0OTE.*_ga*MTE5NjEwNzM1OC4xNzE1MzM0ODg1*_ga_BFPVR2DEE2*MTcyMTYyOTYwNy4zNS4xLjE3MjE2NTE3OTQuNjAuMC4w',
        calendar_icon: 'https://69906f258885a4f4ebf7e70d3efa75db.cdn.bubble.io/f1721643522055x927944309165966200/dependent_out.svg?_gl=1*gg8key*_gcl_aw*R0NMLjE3MTYzNzQxMjYuQ2p3S0NBandyN2F5QmhBUEVpd0E2RUlHeEFmWDBJbG1DTEJHU3NnNnB1TnZ0OUpqUzRCMkR1d290N3VOTmp5ZHV0WTd5bURaaEMtT1R4b0MxY29RQXZEX0J3RQ..*_gcl_au*Nzk1NDMyODI4LjE3MTYxMzI0OTE.*_ga*MTE5NjEwNzM1OC4xNzE1MzM0ODg1*_ga_BFPVR2DEE2*MTcyMTYyOTYwNy4zNS4xLjE3MjE2NTE3OTQuNjAuMC4w',
        dependent_diamond_in_icon: 'https://69906f258885a4f4ebf7e70d3efa75db.cdn.bubble.io/f1721719449243x273223181152114620/dependent_ext.svg?_gl=1*pxon0t*_gcl_aw*R0NMLjE3MTYzNzQxMjYuQ2p3S0NBandyN2F5QmhBUEVpd0E2RUlHeEFmWDBJbG1DTEJHU3NnNnB1TnZ0OUpqUzRCMkR1d290N3VOTmp5ZHV0WTd5bURaaEMtT1R4b0MxY29RQXZEX0J3RQ..*_gcl_au*Nzk1NDMyODI4LjE3MTYxMzI0OTE.*_ga*MTE5NjEwNzM1OC4xNzE1MzM0ODg1*_ga_BFPVR2DEE2*MTcyMTcwMDk5Ni4zNi4xLjE3MjE3MTkyNTIuMjguMC4w'
    }

    // OPTIONS
    const options = {
        chart: {
            plotBackgroundColor: 'rgba(128,128,128,0.02)',
            plotBorderColor: 'rgba(128,128,128,0.1)',
            plotBorderWidth: 1,
            height: 338,
            id: "timeX",
            style: {
                // fontFamily: 'lato',
                fontSize: 12
            },
            // scrollablePlotArea: {
            //     minHeight: 600
            // },
            // marginRight: 30,
            // marginBottom: 30

        },

        // navigator: {
        //     enabled: false,
        //     liveRedraw: false,
        //     series: {
        //         type: 'gantt',
        //         pointPlacement: 0.5,
        //         pointPadding: 0.25,
        //         accessibility: {
        //             enabled: false
        //         }
        //     },
        //     yAxis: {
        //         min: 0,
        //         max: 3,
        //         reversed: true,
        //         categories: []
        //     }
        // },

        scrollbar: {
            enabled: true
        },

        rangeSelector: {
            enabled: true,
            selected: 0
        },
        exporting: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderRadius: '50%',
                borderWidth: 0.5,
                borderColor: '#000',
                connectors: {
                    dashStyle: 'Solid',
                    lineColor: '#3E5F90',
                    lineWidth: 2,
                    radius: 5,
                    startMarker: {
                        enabled: false
                    }
                },
                groupPadding: .14,
                dataLabels: [
                    {
                        enabled: true,
                        align: 'left',
                        useHTML: true,
                        formatter: function () {
                            var dependency_icon = '';
                            var dependency_modal = '';
                            var is_dependent_present, dependency_css_string;
                            is_dependent_present = !this.point.is_type_active_period && this.point.dependencies && this.point.dependencies.length > 0;

                            if (is_dependent_present) {
                                dependency_icon = display_icon(this.point).left_icon;
                                dependency_css_string = 'dependency'
                            }
                            if (is_dependent_present && has_external_dependent(this.point)) {
                                dependency_modal = dependency_modal_element(this.point)

                            }

                            return `
                          <div class="pointer-first-part ${dependency_css_string} ${pointerCursor(!this.point.is_type_active_period)}">
                            ${dependency_icon}
                            ${dependency_modal}
                            <span class='a_name'>${this.point.name}</span>
                          </div>
                    `;
                        },
                        padding: 10,
                        style: {
                            fontWeight: 'bold',
                            textOutline: 'none'
                        }
                    },
                    {
                        enabled: true,
                        align: 'center',
                        useHTML: true,
                        formatter: function () {
                            var is_type_active_period = this.point.is_type_active_period
                            var authorisers = this.point.assignees.authorisers || []
                            var contributors = this.point.assignees.contributors || []
                            var authorisers_counts = authorisers.length > 1 ? `<span class='custom-icon'>${authorisers.length - 1}+</span>` : ``;
                            var contributors_count = contributors.length > 1 ? `<span class='custom-icon'>${contributors.length - 1}+</span>` : ``;

                            var authorisers_icon = authorisers.length > 0
                                ? `<img src="${authorisers[0].icon}" title="${authorisers[0].name}" class="custom-icon">`
                                : '';

                            var contributors_icon = contributors.length > 0
                                ? `<img src="${contributors[0].icon}" title="${contributors[0].name}" class="custom-icon">`
                                : '';

                            var contributor_div = !is_type_active_period ? `  <div class="contributor flex-container ${pointerCursor(!this.point.is_type_active_period)}">
                                <div class="flex-child">
                                     <div class="custom-icons">
                                        ${authorisers_icon}
                                        ${authorisers_counts}
                                    </div>
                                    </div>
                                    <div class="divider"></div>
                                    <div class="flex-child">
                                    <div class="custom-icons">
                                        ${contributors_icon}
                                        ${contributors_count}
                                    </div>
                                    </div>
                                </div>` : '';

                            return contributor_div
                        },
                        padding: 10,
                        style: {
                            fontWeight: 'bold',
                            textOutline: 'none'
                        }
                    },
                    {
                        enabled: true,
                        align: 'right',
                        formatter: function () {

                            var dependency_icon = '';
                            var dependency_modal = '';
                            var is_dependent_present, dependency_css_string;
                            is_dependent_present = !this.point.is_type_active_period && this.point.dependencies && this.point.dependencies.length > 0;

                            if (is_dependent_present) {
                                dependency_icon = display_icon(this.point).right_icon;
                                dependency_css_string = 'dependency'
                            }
                            if (is_dependent_present && has_external_dependent(this.point)) {
                                dependency_modal = dependency_modal_element(this.point)

                            }

                            return `
                          <div class="pointer-third-part ${dependency_css_string}">
                            ${dependency_icon}
                            ${dependency_modal}
                          </div>
                    `;

                        },
                        useHTML: true,
                        padding: 10,
                        style: {
                            fontWeight: 'normal',
                            textOutline: 'none',
                            opacity: 0.8
                        }
                    }
                ],
                point: {
                    events: {
                        click: function (e) {
                            console.debug(e)
                            if (this.task_type == 'activity') {
                                showActiveActivity(this.series.chart, this.name, this.deliverables, true)
                            }

                        }
                    }
                }
            }
        },

        series: [],
        tooltip: {
            pointFormat: '<span style="font-weight: bold">{point.name}</span><br>' +
                '{point.start:%e %b}' +
                '{#unless point.milestone} → {point.end:%e %b}{/unless}' +
                '<br>',
            // positioner: function(_, _, point) {
            //     return {
            //       x: point.plotX,
            //       y: this.chart.plotHeight + this.chart.plotTop
            //     }
            //   },
            useHTML: true,
            // backgroundColor: null,
            backgroundColor: '#ebeef3',
            borderWidth: 0,
            shadow: '0px 3px 3px red',

            style: {
                zIndex: 9000,
                // boxShadow: '0px 3px 3px red'
            },
            className: 'activity_deliverables-tooltip',
            enabled: false,
            formatter: function () {
                var deliverable1 = deliverable_count(100);
                var deliverable2 = deliverable_count(100);
                return `
                <div class="activity_deliverables-tooltip container">
                    <div class="full-screen"><img src="./img/Subtract.svg" alt="expamd view"></div>
                    <div class="progress-bar-container">
                        ${deliverable1}
                        ${deliverable1}
                    </div>
                    <div class="group-buttons">
                        <button>Show more</button>
                        <button>Close </button>
                    </div>

                </div>
                `;
            }
        },
        title: {
            text: ''
        },
        xAxis: [{
            currentDateIndicator: {
                color: '#ED2224',
                dashStyle: 'Shortdot',
                width: 3,
                label: {
                    format: ''
                }
            },
            dateTimeLabelFormats: {
                day: '%e<br><span style="opacity: 0.5; font-size: 0.7em">%a</span>'
            },
            grid: {
                borderWidth: 0
            },
            gridLineWidth: 2,
            min: today - 7 * day,
            max: ((today - 7 * day) + 30 * day),
            custom: {
                today,
                weekendPlotBands: true
            },
            gridLineColor: '#FDF7FF',
            labels: {
                padding: 60,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Lato'
                }
            },
            // min: 5,
            // max: 2,
            // scrollbar: { enabled: true}
        }],
        yAxis: {
            type: 'category',
            categories: [1, 2, 3],
            offset: 60,
            grid: {
                cellHeight: 60
            },
            visible: false,
            // labels:{
            //     formatter: function(){
            //         return ''
            //     }
            // },
            // // min: 3, // Minimum value for the y-axis
            // min: 3,
            max: 4, // Maximum value for the y-axis
            scrollbar: {
                enabled: false // Enable vertical scrollbar for the y-axis
            }
        },
        accessibility: {
            enabled: false,
            keyboardNavigation: {
                seriesNavigation: {
                    mode: 'serialize'
                }
            },
            point: {
                descriptionFormatter: function (point) {
                    var completedValue = point.completed ?
                        point.completed.amount || point.completed : null,
                        completed = completedValue ?
                            ' Task ' + Math.round(completedValue * 1000) / 10 +
                            '% completed.' :
                            '',
                        dependency = point.dependency &&
                            point.series.chart.get(point.dependency).name,
                        dependsOn = dependency ?
                            ' Depends on ' + dependency + '.' : '';

                    return Highcharts.format(
                        point.milestone ?
                            '{point.yCategory}. Milestone at {point.x:%Y-%m-%d}. ' +
                            'Owner: {point.owner}.{dependsOn}' :
                            '{point.yCategory}.{completed} Start ' +
                            '{point.x:%Y-%m-%d}, end {point.x2:%Y-%m-%d}. Owner: ' +
                            '{point.owner}.{dependsOn}',
                        { point, completed, dependsOn }
                    );
                }
            }
        },
        lang: {
            accessibility: {
                axis: {
                    xAxisDescriptionPlural: 'The chart has a two-part X axis ' +
                        'showing time in both week numbers and days.'
                }
            }
        }
    };


    var generate_dependecies = ((t, i, tn) => {
        d = {
            id: Math.random(10),
            source_id: 'deliverable_1',
            target_id: i,
            type: t,
            target_name: tn,
        }
        return d
    })

    var deliverable_count = (count) => {
        // var name = deliverable.name
        // var status = deliverable.status

        return `  <div class="progress-item ${count}%" style="width: '${count}%';">
                        <div class="progress-bar">
                            <div class="progress">
                                <span class="progress-text">Deliverable 1</span>

                                <div class="contributor flex-container">
                                    <div class="flex-child">
                                        <div class="custom-icons">
                                            <img src="./img/avatar_1.svg" title="David" class="custom-icon">
                                            <span class="custom-icon"></span>
                                        </div>
                                </div>
                                    <div class="divider"></div>
                                    <div class="flex-child">
                                        <div class="custom-icons">
                                            <img src="./img/avatar_1.svg" title="David" class="custom-icon">
                                            <span class="custom-icon"></span>
                                        </div>
                                    </div>
                                </div>
                                <span></span>
                            </div>
                        </div>
                        </div>`
    }

    // Initiators
    document.addEventListener('DOMContentLoaded', () => {
        // Plug-in to render plot bands for the weekends
        Highcharts.addEvent(Highcharts.Axis, 'foundExtremes', e => {
            if (e.target.options.custom && e.target.options.custom.weekendPlotBands) {
                var axis = e.target,
                    chart = axis.chart,
                    day = 24 * 36e5,
                    isWeekend = t => /[06]/.test(chart.time.dateFormat('%w', t)),
                    plotBands = [];

                let inWeekend = false;

                for (
                    let x = Math.floor(axis.min / day) * day;
                    x <= Math.ceil(axis.max / day) * day;
                    x += day
                ) {
                    var last = plotBands.at(-1);
                    if (isWeekend(x) && !inWeekend) {
                        plotBands.push({
                            from: x,
                            color: {
                                pattern: {
                                    path: 'M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9',
                                    width: 10,
                                    height: 10,
                                    color: '#FDF7FF',
                                    backgroundColor: 'rgba(253, 247, 255, 1)'
                                }
                            }
                        });
                        inWeekend = true;
                    }

                    if (!isWeekend(x) && inWeekend && last) {
                        last.to = x;
                        inWeekend = false;
                    }
                }
                axis.options.plotBands = plotBands;
            }
        });

    });

    // TIMELINE FUNCTION
    function dependency_modal_element(point) {
        // var name = deliverable.name
        // var status = deliverable.status
        var dependencies_text = display_message(point)
        return `
        <div class="modal ${point.status}">
            <div class="inner-content">
                <div>
                    <div class="text-bold">External dependency</div>
                    <div class="inline-flex">
                        ${dependencies_text}
                    </div>
                </div>
            </div>

        </div>
        `
    }

    function contributor_div(assignees) {
        var assigner_counts = `<span class='custom-icon'></span>`
        assignees = assignees.map(assignee => `<img src="${assignee.icon}" title="${assignee.name}" class="custom-icon">`).join('');
        return `  <div class="contributor flex-container">
        <div class="flex-child">
             <div class="custom-icons">
                ${assignees}
                ${assigner_counts}
            </div>
            </div>
            <div class="divider"></div>
            <div class="flex-child">
            <div class="custom-icons">
                ${assignees}
                ${assigner_counts}
            </div>
            </div>
        </div>`;
    }

    // APICALLS
    // Helper function to fetch JSON data
    const fetchJson = async (url) => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
        }
        return null;
    };

    /**
        * Fetches the name (name_text) for a deliverable or activity by ID.
        * @param {String} id - The ID of the deliverable or activity.
        * @param {String} type - The type of the item ("deliverable" or "activity").
        * @returns {String} The name_text of the deliverable or activity.
        */
    // Function to fetch name by ID
    async function fetchNameById(id, type) {
        let url = type === "deliverable" ? deliverableUrl : activityUrl;
        const data = await fetchJson(url.replace('[uid]', id));
        return data && data.response ? data.response : null;
    }

    // Helper function to fetch dependencies and ensure only resolved objects or null are returned
    async function fetchDependencies(dependenciesList) {
        const results = await Promise.all(
            (dependenciesList || []).map(async (dependencyId) => {
                const dependencyData = await fetchJson(dependencyUrl.replace('[uid]', dependencyId));
                if (dependencyData) {
                    // Await the resolution of fetchNameById to avoid returning a pending promise
                    const objectData = await (dependencyData.response.deliverable_custom_deliverable2
                        ? fetchNameById(dependencyData.response.deliverable_custom_deliverable2, 'deliverable')
                        : fetchNameById(dependencyData.response.activity_custom_activity1, 'activity'));

                    return {
                        _id: dependencyData.response._id,
                        source_id: dependencyData.response.source_id_text,
                        target_id: dependencyData.response.target_id_text,
                        type: dependencyData.response.type_text,
                        is_dependent_into: dependencyData.response.is_dependent_into_boolean,
                        obj: objectData, // This will now contain the resolved object or null
                    };
                }
                return null; // In case of no dependencyData, return null
            })
        );

        // Filter out null values to return only successful objects
        return results.filter(result => result !== null);
    };

    async function fetchAssignments(assignments) {
        const results = await Promise.all(
            (assignments || []).map(async (assignmentId) => {
                const assignmentData = await fetchJson(assignmentUrl.replace('[uid]', assignmentId));
                if (assignmentData) {
                    return {
                        _id: assignmentData.response._id,
                        assigned_role: assignmentData.response.role_option_assigned_role,
                        status: assignmentData.response.status_option_activity_status,
                        user: assignmentData.response.user_user, //TODO return user object here
                        is_activity: assignmentData.response.is_activity_boolean,
                    };
                }
                return null; // In case of no assignmentData, return null
            })
        );

        // Filter out null values to return only successful objects
        return results.filter(result => result !== null);
    };

    async function fetchDeliverablesList(deliverablesList) {
        return await Promise.all(
            (deliverablesList || []).map(async (deliverableId) => {
                const deliverableData = await fetchJson(deliverableUrl.replace('[uid]', deliverableId));
                if (deliverableData) {
                    const dependenciesList = await fetchDependencies(deliverableData.response.dependencies_list_custom_dependency);

                    return {
                        _id: deliverableData.response._id,
                        name_text: deliverableData.response.name_text,
                        approval_time_number: deliverableData.response.approval_time_number,
                        time_period_number: deliverableData.response.time_period_number,
                        duration: (deliverableData.response.time_period_number || 0) + (deliverableData.response.approval_time_number || 0),
                        user_contributors_list_custom_user_assignment: deliverableData.response.user_contributors_list_custom_user_assignment || [],
                        contributors: deliverableData.response.user_contributors_list_custom_user_assignment || [],
                        authorisers: deliverableData.response.user_authorisers_list_custom_user_assignment || [],
                        // position: deliverableData.response.position_number,
                        dependencies_list_custom_dependency: dependenciesList,
                        is_parallel: deliverableData.response.is_parallel__boolean || false,
                        priority_option: deliverableData.response.priority_option_priority || undefined,
                        start: deliverableData.response.start_date_date,
                        end: deliverableData.response.end_date_date
                    };
                }
                return null;
            })
        );
    }

    async function fetchActivityData() {
        const allactivityURL = `https://arcanix.ai/version-31b2p/api/1.1/obj/Activity?limit=200`
        const deliverableUrl = "https://arcanix.ai/version-31b2p/api/1.1/obj/Deliverable/[uid]";
        const userUrl = "https://arcanix.ai/version-31b2p/api/1.1/obj/User/[uid]";
        const dependencyUrl = "https://arcanix.ai/version-31b2p/api/1.1/obj/Dependency/[uid]";

        // Fetch activities
        const activitiesResponse = await fetch(allactivityURL);
        if (!activitiesResponse.ok) {
            throw new Error('Failed to fetch activities');
        }
        const activitiesData = await activitiesResponse.json();
        const activities = activitiesData.response.results;



        // Map activities to the desired format
        const cleanedActivityJsonList = await Promise.all(
            activities.map(async (activity) => {
                try {
                    // Fetch authorisers
                    // const authorisersList = await Promise.all(
                    //     (activity.user_authorisers_list_custom_user_assignment || []).map(async (userId) => {
                    //         const userData = await fetchJson(userUrl.replace('[uid]', userId));
                    //         if (userData) {
                    //             return {
                    //                 first_name_text: userData.response.first_name_text,
                    //                 last_name_text: userData.response.last_name_text,
                    //             };
                    //         }
                    //         return null;
                    //     })
                    // );
                    // Fetch deliverables
                    const deliverablesList = await fetchDeliverablesList(activity.deliverables_list_custom_deliverable2)

                    // Fetch dependencies
                    const dependenciesList = await fetchDependencies(activity.dependencies_list_custom_dependency, activity._id, null)

                    const actors = extractAuthorisersAndContributors(deliverablesList)
                    // TODO convert to good datte format
                    // Return a cleaned activity object
                    return {
                        _id: activity._id,
                        name_text: activity.name_text,
                        approval_time_number: activity.approval_time_number,
                        start_date_date: new Date(activity.start_date_date).toLocaleDateString(),
                        end_date_date: activity.end_date_date ? new Date(activity.end_date_date).toLocaleDateString() : null,
                        activity_creator_user: activity['Created By'],
                        deliverables_list_custom_deliverable2: deliverablesList.filter(Boolean),
                        dependencies: dependenciesList.filter(Boolean),
                        work_start_date: activity.workstartdate_date,
                        work_end_date: activity.workenddate_date,
                        authorisers: activity.user_authorisers_list_custom_user_assignment,
                        deliverable_authorisers: actors.authorisers,
                        deliverable_contributors: actors.contributors
                    };
                } catch (error) {
                    console.error("Error processing activity: ", activity._id, error);
                    return null;
                }
            })
        );

        console.debug("Final cleanedActivityJsonList: ", cleanedActivityJsonList.filter(Boolean));
        return cleanedActivityJsonList.filter(Boolean); // Ensure no null objects are returned
    }

    // SCHEDULING FUNCTIONS
    async function fetchActivityByID(id) {
        try {
            // Fetch the activity
            let url = activityUrl;
            const activityData = await fetchJson(url.replace('[uid]', id));
            if (!activityData || !activityData.response) {
                throw new Error('Failed to fetch activity data');
            }
            const activity = activityData.response;


            // Fetch the deliverables for the activity
            const deliverablesList = await fetchDeliverablesList(activity.deliverables_list_custom_deliverable2)

            // Fetch the dependencies for the activity itself
            const dependenciesList = await fetchDependencies(activity.dependencies_list_custom_dependency, activity._id);
            const actors = extractAuthorisersAndContributors(deliverablesList)
            // Return the final full activity object
            return {
                _id: activity._id,
                name_text: activity.name_text,
                approval_time_number: activity.approval_time_number,
                start_date_date: new Date(activity.start_date_date).toLocaleDateString(),
                end_date_date: activity.end_date_date ? new Date(activity.end_date_date).toLocaleDateString() : null,
                activity_creator_user: activity['Created By'],
                deliverables_list_custom_deliverable2: deliverablesList.filter(Boolean),
                dependencies: dependenciesList.filter(Boolean),
                work_start_date: activity.workstartdate_date,
                work_end_date: activity.workenddate_date,
                authorisers: activity.user_authorisers_list_custom_user_assignment,
                deliverable_authorisers: actors.authorisers,
                deliverable_contributors: actors.contributors
            };

        } catch (error) {
            throw new Error(error.message);
        }
    }


    function extractAuthorisersAndContributors(list) {
        const result = {
            authorisers: [],
            contributors: []
        };

        list.forEach(item => {
            // Check if authorisers or contributors exist and are arrays, then merge them
            if (Array.isArray(item.authorisers)) {
                result.authorisers.push(...item.authorisers);
            }
            if (Array.isArray(item.contributors)) {
                result.contributors.push(...item.contributors);
            }
        });

        // Remove duplicates
        result.authorisers = [...new Set(result.authorisers)];
        result.contributors = [...new Set(result.contributors)];

        return result;
    }

    function generateNumberList(arr) {
        length = arr.length
        return Array.from({ length: length }, (v, i) => i);
    }

    function showActiveActivity(chartElement, name, deliverables, state) {
        // Use getTimelineElements to get elements relative to chartElement

        const { timelineSection, toggleDependencies, activeActivityLink, overviewLink } = getTimelineElements(chartElement);
        var detailChart
        var detailView = timelineSection.querySelector("#detailView")
        if (state) {
            // Update the active activity name and show the detail view
            activeActivityLink.textContent = name;
            activeActivityLink.parentElement.classList.remove('hidden');
            timelineSection.children[0].style.display = 'none';
            timelineSection.children[1].style.display = 'block';

            // Prepare deliverable data for Highcharts
            const deliverableSeries = [{ name: 'Deliverable Series', data: deliverables }];
            const optionsInstance = { ...options, series: deliverableSeries };

            // Render the Gantt chart in the detail view
            detailChart = Highcharts.ganttChart(detailView, optionsInstance);

        } else {
            // Reset the active activity and hide the detail view
            activeActivityLink.textContent = '';
            activeActivityLink.parentElement.classList.add('hidden');
            timelineSection.children[0].style.display = 'block';
            detailView.style.display = 'none';
            // Destroy the existing chart if it exists
            if (detailChart) {
                detailChart.destroy();
            }
        }
    }

    function pointerCursor(t) {
        if (t) {
            return 'pointer-cursor'
        }
    }

    function display_icon(obj) {
        let left_icon = '', right_icon = '';


        var renderButton = function (s, i, t) {
            return `<button class='fab ${s} ${t}'><img src=${i} title="" class="custom-icon"></button>`;
        }

        for (let dep of obj.dependencies) {
            if (dep.type === 'in') {
                if (obj.task_type === 'deliverable' && dep.target_id !== obj.activity_id) {
                    left_icon = renderButton(obj.status, image_assets.dependent_diamond_in_icon, 'ext');
                } else {
                    left_icon = renderButton(obj.status, image_assets.dependent_in_icon);
                }
            }
            if (dep.type === 'out') {
                if (obj.task_type === 'deliverable' && dep.target_id !== obj.activity_id) {
                    right_icon = renderButton(obj.status, image_assets.dependent_diamond_out_icon, 'ext');
                } else {
                    right_icon = renderButton(obj.status, image_assets.dependent_out_icon);
                }
            }
        }
        return { left_icon, right_icon };
    }

    function display_message(obj) {
        var targetNames = obj.dependencies.map(dep => `${dep.target_name}`).join('');
        return `${targetNames}`;
    }

    function has_external_dependent(obj) {
        if (obj.task_type !== 'deliverable') {
            return false;
        }

        return obj.dependencies.some(dep => dep.target_id !== obj.activity_id);
    }

    function getTimelineElements(chartElement) {
        // Get the parent section of the chart element
        const timelineSection = chartElement.container.parentElement.parentElement;

        // Find the specific elements inside the timeline section
        const toggleDependencies = timelineSection.querySelector('#toggle-show-dependency');
        const activeActivityLink = timelineSection.querySelector('#active_activity');
        const overviewLink = timelineSection.querySelector('#activity_overview');

        // Return the elements or do something with them
        return {
            timelineSection,
            toggleDependencies,
            activeActivityLink,
            overviewLink
        };
    }

    // HELPER FUNCTIONS
    /**
    * Calculates the date of a given number of workdays before a specified date, excluding weekends.
    * @param {Date} endDate - The end date from which to calculate backward.
    * @param {number} workDays - The number of workdays to subtract.
    * @returns {Date} The calculated start date.
    *
    */

    // Utility function to convert a JavaScript Date object to UTC Unix timestamp (in seconds)
    function dateToUTCTimestamp(dateString) {
        // Create a new Date object from the input string
        let date = new Date(dateString);

        // Convert the date to a Unix timestamp in milliseconds
        return date.getTime();
    }

    // Helper function to get full name of a user
    function getFullName(user) {
        const firstName = user.first_name_text || '';
        const lastName = user.last_name_text || '';
        return `${firstName} ${lastName}`.trim(); // Trim to remove extra spaces if one name is missing
    }

    /**
    * Generates a style configuration for an activity based on its status and progress.
    *
    * @param {string} status - The status of the activity, which can be 'green', 'amber', or 'red'.
    *                          If an unknown status is passed, 'green' will be used as the default.
    * @param {number} progress - A number between 0 and 1 representing the progress of the activity.
    *                            Values less than 0 will be set to 0, and values greater than 1 will be set to 1.
    *
    * @returns {object} An object containing the color gradient, completion progress, and status information for the activity.
    *
    * The returned object has the following structure:
    * - `colour`: Defines a linear gradient used to represent the activity's progress.
    *   - `linearGradient`: Object with x1, x2, y1, y2 values defining the gradient's direction.
    *   - `id`: A unique ID for the gradient, generated using a random string.
    *   - `stops`: Array defining the gradient stops, with colors dynamically generated based on the status and progress.
    * - `completed`: Object representing the progress completion.
    *   - `amount`: The progress value clamped between 0 and 1.
    *   - `fill`: The color associated with the status.
    * - `status`: The status of the activity, passed from the input parameter.
    */
    function getItemStyle(status, progress) {
        // Define status colors for green, amber, and red
        const colors = {
            green: "#D5F6E8",
            amber: "#FFE5B4",
            red: "#FFCCCB"
        };

        // Get the color associated with the status, default to green if not found
        const color = colors[status] || colors.green;

        // Clamp progress between 0 and 1
        const amount = Math.min(Math.max(progress, 0), 1);

        // Function to convert a hex color code to an RGB string
        function hexToRgb(hex) {
            const bigint = parseInt(hex.slice(1), 16); // Remove '#' and convert hex to integer
            const r = (bigint >> 16) & 255; // Extract red component
            const g = (bigint >> 8) & 255;  // Extract green component
            const b = bigint & 255;         // Extract blue component
            return `${r}, ${g}, ${b}`;      // Return as a comma-separated string
        }

        return {
            colour: {
                // Define a horizontal linear gradient (left to right)
                linearGradient: {
                    x1: 0,
                    x2: 1,
                    y1: 0,
                    y2: 0,
                    id: `highcharts-${Math.random().toString(36).substr(2, 9)}` // Unique ID for the gradient
                },
                // Define the color stops for the gradient
                stops: [
                    [0, color], // Start with the status color
                    [amount, color], // Keep the status color up to the progress amount
                    [amount, `rgba(${hexToRgb(color)}, 0.5)`], // Add a semi-transparent version of the color at the progress point
                    [0.5, `rgba(${hexToRgb(color)}, 0.5)`], // Add a midpoint stop with semi-transparent color
                    [0.5, "#fff"], // Transition to white at the midpoint
                    [1, "#fff"] // End the gradient with white
                ]
            },
            completed: {
                amount: amount, // Return the clamped progress value
                fill: color // Fill color based on the status
            },
            status: status // Return the original status
        };
    }

    function convertToDate(dateString) {
        const [day, month, year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}`);
    }

    function convertIsoToDate(isoString) {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();

        return convertToDate(`${day}/${month}/${year}`);
    }

    // Helper function to map dependencies
    function mapDependencies(dependencies) {
        return dependencies.map(dep => ({
            id: dep._id,
            source_id: dep.source_id,
            target_id: dep.deliverable || dep.activity, // Handles both deliverable and activity as target_id
            target_date: dep.obj,  // Assumes obj holds the date or a valid representation of the target
            type: dep.is_dependent_into ? "dependent" : "independent", // Using is_dependent_into for type
        }));
    }

    function convertToJSformat(date) {
        // Convert DD/MM/YY or DD/MM/YYYY format to MM/DD/YYYY format if necessary
        if (typeof date === 'string') {
            const [day, month, year] = date.split('/');
            const fullYear = year.length === 2 ? `20${year}` : year;  // Handle 2-digit year as well
            date = `${month}/${day}/${fullYear}`;  // Convert to MM/DD/YYYY
        }
        return date
    }

    function generateTimeSeries(activity, index, selectedDeliverableId) {
        let activityApprovalTime = activity.approval_time_number;

        // Step 2: Calculate the activityWorkCompletionDate (this is when the activity work on delivering an activity is schedule to complete)
        // console.debug("Start Time", {start_date: activity.start_date_date, completion_date: activityWorkCompletionDate})

        const live_date = convertToDate(activity.start_date_date)
        let activity_start_date = new Date(live_date.getTime());

        let as = convertIsoToDate(activity.work_start_date)
        let e = convertIsoToDate(activity.work_end_date)
        e = e.setDate(e.getDate() + activityApprovalTime)
        // activity_start_date = activity_start_date.setDate(activity_start_date.getDate() - (activity.duration))
        // debugger
        let activityStyle = getItemStyle("green", 0.2);
        // Set the default timeline for the activity
        let activityTimeline = {
            id: activity._id,
            name: activity.name_text,
            is_type_active_period: false,
            start: dateToUTCTimestamp(as),
            end: dateToUTCTimestamp(e),  // Convert to UTC timestamp
            completed: activityStyle.completed,
            color: activityStyle.colour,
            owner: activity.activity_creator_user,
            dependency: deriveTargetDeps(activity.dependencies),
            is_starred: false,
            assignees: deriveAssigns(activity, 'activity'),
            status: activityStyle.status,
            y: index,
            has_dependant: activity.dependencies && activity.dependencies.length > 0,
            zIndex: 1,
            task_type: "activity",
            className: "pointer-cursor",
            deliverables: [],
            dependencies: activity.dependencies
        };

        // Loop over deliverables and generate timelines for each
        activity.deliverables_list_custom_deliverable2.forEach((deliverable, index) => {
            let deliverableStyle = getItemStyle("green", 0.2);
            let start = convertIsoToDate(deliverable.start);

            let end = convertIsoToDate(deliverable.end)
            // Map deliverable timelines

            let borderWidth = selectedDeliverableId === deliverable._id ? 1 : 0.5;
            let deliverableTimeline = {
                id: deliverable._id,
                name: deliverable.name_text,
                activity_id: activity._id,
                start: dateToUTCTimestamp(start),  // Convert to UTC timestamp
                end: dateToUTCTimestamp(end),  // Convert to UTC timestamp
                dependency: deriveTargetDeps(deliverable.dependencies_list_custom_dependency),
                completed: deliverableStyle.completed,
                color: deliverableStyle.colour,
                owner: activity.activity_creator_user,
                assignees: deriveAssigns(deliverable, 'deliverable'),
                status: deliverableStyle.status,
                has_dependant: deliverable.dependencies_list_custom_dependency.length > 0,
                zIndex: 1,
                task_type: "deliverable",
                dependencies: mapDependencies(deliverable.dependencies_list_custom_dependency),
                y: index,
                borderWidth: selectedDeliverableId === deliverable._id ? 3 : 0.5,
                borderColor: '#64558F', // Custom border color for this point
            };

            // Add the deliverable to the activity's deliverables list
            activityTimeline.deliverables.push(deliverableTimeline);
        });

        // Create the milestone "launch" object
        let launchMilestone;
        var endLaunchDate
        let baseMilestone = {
            //    id: `${activity._id}_`,  // Append underscore to activity ID
            is_type_active_period: true,
            start: dateToUTCTimestamp(convertToDate(activity.start_date_date)),  // Convert to UTC timestamp
            owner: activity.activity_creator_user,
            assignees: [],
            y: index,
            borderWidth: 1,
            className: "custom-point-1",
            borderColor: "#3E5F90",
            zIndex: 1,
            milestone: false  // Default is false, can be updated later
        };

        // Conditional logic for launch or LIVE milestones
        if (activity.end_date_date == "Invalid Date") {
            launchMilestone = {
                ...baseMilestone,
                name: "",
                zIndex: 1,
                milestone: true,
                connectors: {
                    dashStyle: 'dash',
                    lineColor: '#C8C5D0',
                    lineWidth: 2,
                    radius: 5,
                    startMarker: {
                        enabled: false
                    }
                },
                dependency: activity._id
            };
        } else {
            launchMilestone = {
                ...baseMilestone,
                name: "LIVE",
                end: activity.end_date_date ? dateToUTCTimestamp(convertToDate(activity.end_date_date)) : undefined,  // Convert to UTC timestamp
                completed: {
                    amount: 1,
                    fill: "#D5E3FF"
                },
                milestone: false
            };
        }

        // Return the final timeline objects
        return { activityTimeline, launchMilestone };
    }
    /**
    * Takes the result from fetchActivityData and returns a list of activity event series objects.
    * @param {Array} activities - The list of activities.
    * @returns {Array} The list of activity event series objects.
    */
    function extractTimeSeriesFromFetchedActivitiesJSON(fetchActivityDataResult) {
        const activities = fetchActivityDataResult;  // Assuming this fetches the activity data
        let activityEventSeries = activities.map((activity, index) => {
            const { activityTimeline, launchMilestone } = generateTimeSeries(activity, index, null);

            return {
                name: `${activity.name_text + 1} ${index + 1}`,
                id: activity._id,
                data: [activityTimeline, launchMilestone]  // Includes both the main activity and its "launch" milestone
            };
        });
        return activityEventSeries;
    }

    function renderTimeline(newDataSeries, chartID) {
        if (document.getElementById(chartID)) {
            options.series = newDataSeries

            Highcharts.ganttChart(`${chartID}`, options, function (chart) {
                var timeElements = getTimelineElements(chart);
                timeElements.overviewLink.addEventListener('click', (e) => {
                    showActiveActivity(chart, false);
                })
            });
            showTimelineLoader(chartID)
            var currentTimeWithMonth = new Date().toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(',', '');
            console.debug("renderTimeline called at:", currentTimeWithMonth);
        }

    }

    function showTimelineLoader(chartID, state) {
        if (state) {
            $('#' + chartID).siblings('.loading-overlay').addClass('active');
        } else {
            $('#' + chartID).siblings('.loading-overlay').removeClass('active');
        }
    }
    // Plan activity scheduling

    function deriveTargetDeps(inputList) {
        /**
         * Extracts the list of 'target_id' values from the given list of dependency objects,
         * filtering by type 'successor'.
         * @param {Array} inputList - A list of dependency objects.
         * @returns {Array} - A list of 'target_id' values where type is 'successor'.
         */
        if (!inputList) {
            return '';
        }

        return inputList
            .filter(item => item.type === 'successor') // Ensure the item type is 'successor'
            .map(item => item.target_id) // Extract 'target_id'
            .filter(Boolean); // Remove undefined/null/false values
    }

    function deriveAssigns(obj, type) {
        const unique = (array) => [...new Set(array)]; // Utility to ensure uniqueness
        const formatAssignments = (ids) =>
            ids.map((id) => ({
                name: id,
                icon: image_assets.avatar1_icon,
            }));

        if (type === 'activity') {
            // Combine authorisers from both activity and deliverable levels, ensuring uniqueness
            const authorisers = unique([
                ...(obj.authorisers || []),
                ...(obj.deliverable_authorisers || []),
            ]);
            // Use contributors from deliverable level
            const contributors = unique(obj.deliverable_contributors || []);

            return {
                authorisers: formatAssignments(authorisers),
                contributors: formatAssignments(contributors),
            };
        } else if (type === 'deliverable') {
            // Use only the deliverable-specific authorisers and contributors
            const authorisers = unique(obj.authorisers || []);
            const contributors = unique(obj.contributors || []);

            return {
                authorisers: formatAssignments(authorisers),
                contributors: formatAssignments(contributors),
            };
        }

        // Return empty object if type is neither 'activity' nor 'deliverable'
        return {
            authorisers: [],
            contributors: [],
        };
    }

    function calculateWorkdays(givenDate, totalDays, backwards = true) {
        let currentDate = new Date(givenDate);

        // Check if totalDays is 0
        if (totalDays === 0) {
            // If the currentDate is Saturday (6) or Sunday (0)
            if (currentDate.getDay() === 6) { // Saturday
                currentDate.setDate(currentDate.getDate() - 1); // Move to Friday
            } else if (currentDate.getDay() === 0) { // Sunday
                currentDate.setDate(currentDate.getDate() - 2); // Move to Friday
            }
            return currentDate; // Return the closest past weekday
        }

        // Loop to adjust the date by skipping weekends
        while (totalDays > 0) {
            currentDate.setDate(currentDate.getDate() + (backwards ? -1 : 1));
            // Skip weekends (Saturday: 6, Sunday: 0)
            if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                totalDays -= 1;
            }
        }

        return currentDate;
    }

    // Initialized a default resource
    const allResources = [];
    function deriveReservation(activity) {
        if (!activity) {
            throw new Error("Activity object is required");
        }

        // Parse the live_date and handle the date c   format
        // const [day, month, year] = activity.live_date.split("/");
        const liveDate = convertToDate(activity.start_date_date)

        if (isNaN(liveDate.getTime())) {
            throw new Error("Invalid live_date format");
        }

        // console.debug("loaded activityObject >>>>", activity);
        // Calculate the completedDate based on the live_date and approval_time
        const approvalTimeInMilliseconds = activity.approval_time * 24 * 60 * 60 * 1000;
        // const completedDate = new Date(liveDate.getTime() - approvalTimeInMilliseconds).toISOString();
        const activityLatestWorkEndDate = new Date(liveDate.getTime() - (activity.approval_time_number || 0) * 24 * 60 * 60 * 1000);

        // Create unique id to enforce deliverable are schedule in sequnce
        const randomString = Math.random().toString(36).substring(2, 10);


        // Helper function to map priority_option to priority value
        function getPriorityValue(priorityOption) {
            switch (priorityOption) {
                case 'p1': return 100;
                case 'p2': return 80;
                case 'p3': return 60;
                case 'p4': return 40;
                case 'p5': return 20;
                default: return 50; // Default priority if undefined
            }
        }

        function convertToDate(dateString) {
            const [day, month, year] = dateString.split('/');
            return new Date(`${year}-${month}-${day}`);
        }

        // Function to get dependencies where the target is in the deliverables list and is_dependent_into is true
        function deriveRelated(dependencies, deliverableIds) {
            return (dependencies || [])
                .filter(
                    (dependency) =>
                        deliverableIds.includes(dependency.target_id) && dependency.is_dependent_into
                )
                .map((dependency) => dependency.target_id);
        }



        // Function to build the resources of a deliverable
        function getDeliverableResources(deliverable) {
            var copy_deliverable = deliverable
            if (deliverable.is_parallel) {
                // If deliverable is parallel, wrap contributors in a double bracket
                // copy_deliverable.contributors.push(randomString);
                // return [copy_deliverable.contributors];

                // Temporary workaround: enables parallel execution of deliverables by instantiating a new resource
                var rand = Math.random().toString(36).substring(2, 10);
                allResources.push(rand);
                return rand
            } else {
                // If deliverable is not parallel, return contributors in a single bracket
                // copy_deliverable.contributors.push(randomString)
                // return copy_deliverable.contributors;

                // Temporary solution: using a constant resource enforces sequential scheduling for deliverables by default
                return randomString
            }
        }

        // Function to extract unique contributors and map them to [{id: "A"}] format
        function getUniqueContributors(activityObject) {
            // Step 1: Ensure deliverables_list exists and has items, otherwise return an empty array
            if (!activityObject.deliverables_list_custom_deliverable2 || activityObject.deliverables_list_custom_deliverable2.length === 0) {
                return []; // No deliverables, return empty result
            }

            // Step 2: Flatten the list of contributors from all deliverables, accounting for empty contributors lists
            // const allContributors = activityObject.deliverables_list.flatMap(deliverable =>
            //     deliverable.contributors && deliverable.contributors.length > 0 ? deliverable.contributors : [{id: 'R1'}]
            // );

            // Step 3: Create a Set to ensure unique contributors
            // const uniqueContributors = [...new Set(allContributors)];
            // Temp fix
            const uniqueContributors = allResources;
            uniqueContributors.push(randomString);

            // Step 4: Map the unique contributors to the desired format [{id: "A"}]
            return uniqueContributors.map(contributor => ({ id: contributor }));
        }

        // Extract the activity contributors 
        let all_contributors = getUniqueContributors(activity)

        // Extract the deliverables and format them for the reservation object
        const deliverableIds = (activity.deliverables_list_custom_deliverable2 || []).map((d) => d._id);
        const deliverables = (activity.deliverables_list_custom_deliverable2 || []).map((deliverable) => ({
            id: deliverable._id,
            duration: deliverable.duration,
            dependsOn: deriveRelated(deliverable.dependencies, deliverableIds),
            priority: getPriorityValue(deliverable.priority_option),
            resources: getDeliverableResources(deliverable)
        }));

        // Construct the reservation object
        const reservation = {
            completedDate: activityLatestWorkEndDate,
            deliverables: deliverables,
            resources: all_contributors
        };
        // console.debug("derieved reservation >>", reservation);   
        return reservation;
    }

    function buildScheduleObject(deliverables) {
        var t = schedule.tasks()
            .id(function (d) { return d.id; })
            .duration(function (d) {
                return (d.duration * 1440);
            })
            .priority(function (d) {
                return d.priority;
            })
            .minSchedule(function (d) {
                return (d.duration * 1440);
            })
            .dependsOn(function (d) {
                return d.dependsOn ? d.dependsOn : undefined;
            })
            .resources(function (d) {
                return d.resources ? d.resources : ['R1'];
            })
        //  assume deliverable are done by diff contributors
        // .resources(function (d) {
        //   return d.resources ? d.resources : ['E1'];
        // })
        return t(deliverables)

    }

    function getTotalDuration(scheduleObj) {
        if (scheduleObj.success) {
            return Math.ceil((scheduleObj.end - scheduleObj.start) / (1000 * 60 * 60 * 24));
        } else {
            throw new Error("Auto scheduling failed!");
        }
    }

    function autoScheduling(activityObject) {
        // initialize task list
        var schedulesBuild = buildScheduleObject(activityObject.deliverables),
            completedDate = new Date(activityObject.completedDate),
            initialSchedule = schedule.create(schedulesBuild, activityObject.resources, null, completedDate);
        // debugger
        console.debug("builded schedulesBuild obj >>>>", schedulesBuild);
        // Get duration length for schedule
        var tt = getTotalDuration(initialSchedule)
        // Backdate schedule
        var it = new Date(completedDate)
        var backDate = new Date(it.setDate(it.getDate() - tt))

        console.debug("This is initial schedule >>>>", initialSchedule);
        // new backdate schedule
        var backwardSchedules = schedule.create(schedulesBuild, activityObject.resources, null, backDate);
        console.debug("This is final schdule >>>>", backwardSchedules)

        return backwardSchedules
        // updateDataWithNewInfo(ns)
    }

    async function updateSchedule(activity_id, obj) {
        // Helper function to make a POST request
        const postRequest = async (url, data) => {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                return response.ok;
            } catch (error) {
                console.error(`Failed to update data at ${url}:`, error);
                return false;
            }
        };

        // Update the activity start and end times
        const updateActivityData = {
            id: activity_id,
            workStartDate: obj.start,
            workEndDate: obj.end
        };
        const activityUpdated = await postRequest(updateActivityEndpoint, updateActivityData);
        if (!activityUpdated) {
            console.error(`Failed to update activity with ID ${activity_id}`);
            return false;
        }

        function getStartDate(eD, d) {
            var d = d / 1440, c = convertIsoToDate(eD)
            r = c.setDate(c.getDate() - d);
            return r
        }
        // Update each deliverable's early start and late finish times
        Object.entries(obj.scheduledTasks).forEach(async ([deliverableId, taskData], index) => {
            const updateDeliverableData = {
                id: deliverableId,
                start_date: getStartDate(taskData.earlyFinish, taskData.duration),
                end_date: taskData.earlyFinish,
                position: index
            };
            const deliverableUpdated = await postRequest(updateDeliverableEndpoint, updateDeliverableData);
            if (!deliverableUpdated) {
                console.error(`Failed to update deliverable with ID ${deliverableId}`);
            }
        });
        //renderActivityTimeline
        //renderDeliverableTimeline
        //refreshDashboardTimeline
        console.debug("Schedule updates completed successfully");
        return true;
    }

    //return an object with activity timeline with milestone
    async function generateActivityTimeseries(activity_id, selectedDeliverableId) {
        var getA = await fetchActivityByID(activity_id);
        var timeSeries = generateTimeSeries(getA, 0, selectedDeliverableId); //build timeseries for chart.
        return timeSeries

    }

    async function renderActivityTimeline(a_id, d_id = null, chartElementID) {
        showTimelineLoader(chartElementID, true);

        try {
            // Generate activity timeseries based on provided activity and deliverable IDs
            const a_obj = await generateActivityTimeseries(a_id, d_id);

            // Setup options for the chart
            const newOpts = setUpActivityOption(a_obj.activityTimeline);

            // Prepare chart data
            const chartData = {
                ...newOpts,
                series: [
                    {
                        name: 'Deliverables Timeline',
                        data: a_obj.activityTimeline.deliverables
                    }
                ]
            };

            // Render the Gantt chart
            Highcharts.ganttChart(chartElementID, chartData);
        } catch (error) {
            console.error("Error rendering activity timeline:", error);
        } finally {
            // Hide the loader regardless of success or error
            showTimelineLoader(chartElementID);
        }
    }

    // Wrapper function for rendering single activity deliverables
    async function renderSingleActivityDeliverablesTimeSeries(id, chartElementID) {
        await renderActivityTimeline(id, null, chartElementID);
    }

    // Wrapper function for rendering selected deliverables time series
    async function renderSelectedDeliverablesTimeSeries(a_id, d_id, chartElementID) {
        await renderActivityTimeline(a_id, d_id, chartElementID);
    }

    function setUpActivityOption(timeSeries) {
        // Find the earliest start time
        const min = findEarliestTime(timeSeries.deliverables);
        const max = min + 30 * 24 * 60 * 60 * 1000;

        // Create a clone of the options object
        const newOptions = $.extend(true, {}, options)

        if (Array.isArray(newOptions.xAxis)) {
            newOptions.xAxis = [...newOptions.xAxis];
            newOptions.xAxis[0] = {
                ...newOptions.xAxis[0],
                min: min, // Update min
                max: max  // Update max
            };
        }

        if (newOptions.rangeSelector) {
            newOptions.rangeSelector = {
                ...newOptions.rangeSelector,
                enabled: false // Disable range selector
            };
        }

        return newOptions;
    }

    // Helper function to find the earliest start time in deliverables
    function findEarliestTime(deliverables) {
        return deliverables.reduce((earliest, deliverable) => {
            return deliverable.start < earliest ? deliverable.start : earliest;
        }, Infinity); // Start with a very high value
    }

    async function renderAllActivityTimeline() {
        //expand later now just do this basic
        var a = await fetchActivityData();
        var timeline = extractTimeSeriesFromFetchedActivitiesJSON(a);
        window.localStorage.setItem("timelineSeries", JSON.stringify(timeline));
        renderTimeline(timeline, 'cna');

    }

    async function processDeliverableFeed(activity_id, deliverable_id, chartElementID) {
        try {
            // Step 1: Fetch the activity feed by ID
            const activityFeed = await fetchActivityByID(activity_id);
            if (!activityFeed) throw new Error("Failed to fetch activity feed");

            // Step 2: Derive the reservation schedule
            const scheduledItems = deriveReservation(activityFeed);

            // Step 3: Perform backward scheduling
            const backwardScheduled = autoScheduling(scheduledItems);

            // Step 4: Update the schedule with the calculated data
            const updateSuccess = await updateSchedule(activity_id, backwardScheduled);
            if (!updateSuccess) throw new Error("Failed to update schedule");

            // Step 5: Render the updated deliverables time series
            renderSelectedDeliverablesTimeSeries(activity_id, deliverable_id, chartElementID);

            console.info("Activity feed processed successfully!");
            return true; // Indicates the entire operation completed successfully
        } catch (error) {
            console.error("Error processing activity feed:", error);
            return false; // Indicates an error occurred
        }
    }


