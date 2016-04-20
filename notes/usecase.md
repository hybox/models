
# Example Use Case: Postcards

## Description

A postcard collector, J Smith, donates his collection of historical and valuable postcards to an institution.  The collection, the postcards and the related resources are digitized and described, to be managed in a Hydra based platform.  The collection has three postcards in it, sent by and to various people.  The collection is governed by a donor agreement, and managed by Jones University.
The first postcard is from Jane Bloggs to Joe Cantor, on the subject of her pet cat.

```
_:c1 a pcdm:Collection ;
  rdfs:label "Postcard Collection";
  edm:isRepresentationOf _:rwo1 ;
  pcdm:hasMember _:pc1, _:pc2, _:pc3 ;
  pcdmw:hasFileSet _:tn1 ;
  pcdm:hasRelatedObject _:donor1 .

_:tn1 a pcdmw:FileSet ;
  rdfs:label "Collection Thumbnail Image" ;
  pcdmw:hasMaster </tn1/files/thumbnail.jpg> ;
  pcdm:hasFile </tn1/files/thumbnail.jpg>, </cti/files/thumbnail.png> .

_:donor1 a pcdm:Object ;
  rdfs:label "Collection Donor Agreement" ;
  edm:isRepresentationOf _:rwo2 ;
  pcdmw:hasFileSet _:fs2 .

_:fs2 a pcdmw:FileSet ;
  rdfs:label "Collection Donor Agreement Document" ;
  pcdmw:hasMaster </fs2/files/donorAgreement.pdf> ;
  pcdm:hasFile </fs2/files/donorAgreement.pdf> .

_:pc1 a pcdm:Object ;
  rdfs:label "Postcard" ;
  edm:isRepresentationOf _:rwopc1 ;
  pcdm:hasMember _:front1, _:back1 ;
  pcdmw:hasFileSet _:tn2 .

_:tn2 a pcdmw:FileSet ;
  rdfs:label "Postcard Thumbnail Image" ;
  pcdmw:hasMaster </tn2/files/thumbnail.jpg> ;
  pcdm:hasFile </tn2/files/thumbnail.jpg> .

_:front1 a pcdm:Object ;
  rdfs:label "Front of Postcard" ;
  pcdmw:hasFileSet _:frontfs1 .

_:frontfs1 a pcdmw:FileSet ;
  rdfs:label "Front of Postcard Image" ;
  pcdmw:hasMaster </frontfs1/files/front.jp2> ;
  pcdm:hasFile </frontfs1/files/front.jp2>, </frontfs1/files/front.jpg> .

_:back1 a pcdm:Object ;
  rdfs:label "Back of Postcard" ;
  pcdmw:hasFileSet _:backfs1, _:backfs2 .

_:backfs1 a pcdmw:FileSet ;
  rdfs:label "Back of Postcard Image" ;
  pcdmw:hasMaster </backfs1/files/back.jp2> ;
  pcdm:hasFile </backfs1/files/back.jp2>, </backfs1/files/back.jpg> .

_:backfs2 a pcdms:FileSet ;
  rdfs:label "Back of Postcard Transcription" ;
  pcdmw:hasMaster </backfs2/files/tei.xml> ;
  pcdm:hasFile </backfs2/files/tei.xml>, </backfs2/files/transcription.txt> .


_:rwo1 a dpla:SourceResource ;
  dc:title "Postcard Collection of Prof. J. Smith" ;
  dcterms:creator _:smith1;
  dc:rightsHolder _:smith1 ;
  dc:date "1985/2005" ;
  dc:descrition "A collection of rare postcards, collected between 1985 and 2005 by J. Smith" ;
  dc:rights "This collection of postcards is owned by Prof. J. Smith, and held by Jones University" ;
  marcrel:rps _:org2 ;
  marcrel:cur _:curator1 ;
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

_:rwo2 a dpla:SourceResource ;
  dc:title "Agreement between Smith and Jones University" ;
  dc:date "2014" ;
  marcel:sgn _:smith1, _:curator1 ;
  dc:description "Governing agreement under which the postcard collection is managed" .  

_curator1 a foaf:Person ;
  foaf:name "Molly Jones" ;
  schema:affiliation _:org2 .

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




