# Contributors and Acknowledgements

This documentation was produced by the [Hydra in a Box](http://hydrainabox.projecthydra.org/) project team. Hydra in a Box is a collaborative project between the [Digital Public Library of America](https://dp.la/), [Stanford University Libraries](http://library.stanford.edu/), and [DuraSpace](http://duraspace.org/).

This project was made possible in part by the [Institute of Museum and Library Services](https://www.imls.gov/), [LG-70-15-0006-15](https://www.imls.gov/grants/awarded/lg-70-15-0006-15). The views, findings, conclusions or recommendations expressed in this documentation do not necessarily represent those of the Institute of Museum and Library Services.

## List of Contributors

{% for c in config.contributors %}
* [{{ c.name }}![ORCID iD](/img/orcid_16x16.png)]({{ c.orcid }}), {{ c.organization }}{% endfor %}
