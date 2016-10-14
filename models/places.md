
## Places

### Introduction

The model follows [DPLA MAPv4](http://dp.la/info/wp-content/uploads/2015/03/MAPv4.pdf), assuming a base compatibility with `geonames:Feature` (this makes it a subclass of `schema:Place`).

Per [#33](http://github.com/hybox/models/issues/33), geometry information has been declared out of scope for the first phase.

### Model

* edm:Place
 * rdfs:label (MUST)
 * wgs84_pos:lat (SHOULD)
 * wgs84_pos:long (SHOULD)
 * wgs84_pos:alt (MAY)
 * gn:parentFeature (MAY)
 * gn:countryCode (MAY)

### Usage

#### Defining New Places

#### References to Places

* dcterms:subject
* dcterms:spatial
* schema:birthPlace
* schema:deathPlace



