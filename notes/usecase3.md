
# Example Use Case: Thesis with DataSet

## Description

A PhD student deposits their Thesis into the institutional repository. With the thesis (a PDF), is the dataset that they used in their research, and the underlying latex and image files used to generate the PDF.  They later update the object with a copy of the publisher supplied PDF Proof of the published version.

```
_:pc1 a pcdm:Object ;
  rdfs:label "Thesis of Jane Smith" ;
  edm:isRepresentationOf _:rwo1 ;
  pcdm:hasMember _: ;
  pcdmw:hasFileSet _:tn2 .

_:front1 a pcdm:Object ;
  rdfs:label "Thesis Document" ;
  pcdmw:hasFileSet _:fs1 .

_:fs1 a pcdmw:FileSet ;
  rdfs:label "Front of Postcard Image" ;
  pcdmu:hasOriginalFile </frontfs1/files/front.jp2> ;
  pcdm:hasFile </frontfs1/files/front.jp2>, </frontfs1/files/front.jpg> .

_:back1 a pcdm:Object ;
  rdfs:label "Dataset Used" ;
  pcdmw:hasFileSet _:backfs1, _:backfs2 .

_:rwopc1 a dpla:SourceResource ;
  dc:title "Thesis" ;
  dcterms:creator _:bloggs1 ;
  marcrel:rcp _:cantor1 ;
  dc:rightsHolder _:smith1 ;
  dc:date "1843" ;
  dc:description "A postcard from Bloggs to Cantor describing her cat" ;
  dc:rights "This postcard is owned by Prof. J. Smith, and held by Jones University" ;
  marcrel:rps _:org2 ;
  dcterms:subject <http://id.loc.gov/authorities/subjects/sh85021262> ;
  dcterms:medium <http://id.loc.gov/authorities/subjects/sh85105462> .

_:bloggs1 a foaf:Person ;
  foaf:name "Jane Bloggs" ;
  schema:birthDate "1820" ;
  schema:deathDate "1886" ;
  foaf:knows _:cantor1 .

```




