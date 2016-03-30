
## Concepts

### Introduction


### Model

* skos:ConceptScheme  
  * rdfs:label (MUST)

* skos:Concept
  * skos:prefLabel (MUST)
  * skos:definition (SHOULD)
  * skos:altLabel (MAY)
  * skos:inScheme (MAY)
  * skos:note (MAY)
  * skos:broader (MAY)
  * skos:narrower (MAY)
  * skos:closeMatch (MAY)
  * skos:exactMatch (MAY)


### Usage

```
<repo:/concepts/scifi> a skos:Concept ;
  skos:inScheme <repo:/schemes/1> ;
  skos:prefLabel "Sci-Fi"@en ;
  skos:definition "Science Fiction" ;
  skos:note "Created 2016/07/20 to have a more friendly prefLabel" ;
  skos:exactMatch <http://id.loc.gov/authorities/genreForms/gf2014026529> .

<repo:/schemes/genres> a skos:ConceptScheme ;
  rdfs:label "Local Genre classifications" .
```


### External Taxonomies

The use of external taxonomies (concept schemes) is encouraged.  Several appropriate SKOS concept schemes can be found via the following URLs:

* http://id.loc.gov/
* http://www.getty.edu/research/tools/vocabularies/index.html
* https://www.w3.org/2001/sw/wiki/SKOS/Datasets

