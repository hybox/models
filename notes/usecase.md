
# Example Use Case: Postcards

## Description

A postcard collector, J Smith, donates his collection of historical and valuable postcards to an institution.  The collection, the postcards and the related resources are digitized and described, to be managed in a Hydra based platform.  The collection has three postcards in it, sent by and to various people.  The collection is governed by a donor agreement, and managed by Jones University.
The first postcard is from Jane Bloggs to Joe Cantor, on the subject of her pet cat.

```
_:c1 a pcdm:Collection ;
  rdfs:label "Postcard Collection";
  edm:isRepresentationOf _:rwo1 ;
  pcdm:hasMember _:pc1, _:pc2, _:pc3 ;
  pcdm:hasRelatedObject _:tn1, _:donor1 .

_:tn1 a pcdm:Object ;
  rdfs:label "Collection Thumbnail" ;
  pcdm:hasMember _:fs1 .

_:fs1 a pcdmw:FileSet ;
  rdfs:label "Collection Thumbnail Image" ;
  pcdm:hasFile </cti/files/thumbnail.jpg>, </cti/files/thumbnail.png> .

_:donor1 a pcdmw:Work ;
  rdfs:label "Collection Donor Agreement" ;
  pcdm:hasMember _:fs2 .

_:fs2 a pcdmw:FileSet ;
  rdfs:label "Collection Donor Agreement Document" ;
  pcdm:hasFile </cda/files/donorAgreement.pdf>, </cda/files/donorAgreement.html> ;

_:rwo1 a dpla:SourceResource ;
  dc:title "Postcard Collection of Prof. J. Smith" ;
  dcterms:creator _:smith1;
  dc:rightsHolder _:smith1 ;
  dc:date "1985/2005" ;
  dc:descrition "A collection of rare postcards, collected between 1985 and 2005 by J. Smith" ;
  dc:rights "This collection of postcards is owned by Prof. J. Smith, and held by Jones University" ;
  marcrel:rps _:org2 ;
  dcterms:subject <http://id.loc.gov/authorities/subjects/sh85105462> .

_:smith1 a foaf:Person ;
  foaf:name "John Smith" ;
  foaf:familyName "Smith" ;
  foaf:givenName "John" ;
  schema:honorificPrefix "Prof."
  schema:affiliation _:org1 ;
  schema:birthDate "1970-04-20" ;
  schema:birthPlace _:place1 .

_:org1 a foaf:Organization ;
  rdfs:label "Smith Postcard Foundation" .

_:place1 a edm:Place ;
  rdfs:label "Smithsville" ;
  wgs84_pos:lat 67.872 ;
  wgs84_pos:long -23.517 .

_:org2 a foaf:Organization ;
  rdfs:label "Jones University" . 

_:pc1 a pcdmw:Work ;
  rdfs:label "Postcard" ;
  edm:isRepresentationOf _:rwopc1 ;
  pcdm:hasMember _:front1, _:back1 ;
  pcdm:hasRelatedObject _:tn2 .

_:front1 a pcdm:Object ;
  rdfs:label "Front of Postcard" ;
  pcdm:hasMember _:frontfs1 .

_:frontfs1 a pcdmw:FileSet ;
  rdfs:label "Front of Postcard Image" ;
  pcdm:hasFile </frontfs1/files/front.jp2>, </frontfs1/files/front.jpg> .

_:back1 a pcdm:Object ;
  rdfs:label "Back of Postcard" ;
  pcdm:hasMember _:backfs1, _:backfs2 .

_:backfs1 a pcdmw:FileSet ;
  rdfs:label "Back of Postcard Image" ;
  pcdm:hasFile </backfs1/files/back.jp2>, </backfs1/files/back.jpg> .

_:backfs2 a pcdms:FileSet ;
  rdfs:label "Back of Postcard Transcription" ;
  pcdm:hasFile </backfs2/files/tei.xml>, </backfs2/files/transcription.txt> .

_:tn2 a pcdm:Object ;
  rdfs:label "Postcard Thumbnail" ;
  pcdm:hasMember _:tn2fs1 .

_:fn2fs1 a pcdmw:FileSet ;
  rdfs:label "Postcard Thumbnail Image" ;
  pcdm:hasFile </fn2fs1/files/thumbnail.jpg> .

_:rwopc1 a dpla:SourceResource ;
  dc:title "Postcard from Bloggs to Cantor (1843)" ;
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

_:cantor1 a foaf:Person ;
  foaf:name "Joe Cantor" ;
  schema:birthDate "1819" ;
  schema:deathDate "1858" ;
  foaf:knows _:bloggs1 .

```

## Outstanding Questions

* How to say the front of the postcard has the artwork which is a painting?

* How to say that the thumbnail depicts the first three postcards?
  * foaf:depicts implies the Object is also a foaf:Image, which is a Document. Could be from all of the bitstream resources, but that's wasteful when at least the FileSet and likely also the Object really stand for the image.




