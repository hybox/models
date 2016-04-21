
# Example Use Case: Postcard Booklet

## Description

http://alexandria.ucsb.edu/lib/ark:/48907/f35x2743

```
_:c1 a pcdm:Collection ;
  rdfs:label "Santa Barbara picture postcards collection" ;
  edm:isRepresentationOf _:rwo1 ;
  pcdm:hasMember _:pc1, _:pc2, _:pc3, _:pc130 .

_:pc3 a pcdm:Object ;
  rdfs:label "Souvenir of Santa Barbara, California"
  edm:isRepresentationOf _:rwo2 ;
  pcdm:hasMember _:front, _:page1, _:page2, _page7 .

_:front a pcdm:Object ;
  rdfs:label "Front Page" ;
  pcdmw:hasFileSet _:fs1 .

_:page1 a pcdm:Object ;
  rdfs:label "Page 1" ;
  edm:isRepresentationOf _:postoffice, _:concert, _:cityhall ;
  pcdmw:hasFileSet _:fs2 .





_:rwo1 a dpla:SourceResource ;
  dc:title "Santa Barbara picture postcards collection" ;
  dc:extent "130 Postcards" ;
  bf:identifiedBy _:acc1, _:ark1 ;
  dcterms:subject <http://id.loc.gov/authorities/subjects/sh85105462> ;
  marcrel:rps <http://id.loc.gov/vocabulary/organizations/cusb> .

_:acc1 a _:AccessionNumberIdentifier ;
  rdf:value "SBHC Mss 36" .

_:ark1 a _:ArkIdentifier ;
  rdf:value "ark:/48907/f3k35rv9" .

_:rwo2 a dpla:SourceResource ;
  dc:title "Souvenir of Santa Barbara, California" ;
  dcterms:extent "18 prints forming 1 item : color (postcard format)" ;
  bf:identifiedBy _:acc2, _:ark2 ;
  schema:location <http://vocab.getty.edu/tgn/7017752> ;
  dc:date "circa 1900s-1950s" ;
  dc:description "Souvenir viewbook comprised of 18 postcards on accordion-folded pages." .

_:acc2 a _:AccessionNumberIdentifier ;
  rdf:value "cusbspcmss36-110130" .

_:ark2 a _:ArkIdentifier ;
  rdf:value "ark:/48907/f35x2743" .

_:postoffice a dpla:SourceResource ;
  dc:title "Post Office" ;
  dcterms:medium <http://id.loc.gov/authorities/subjects/sh85105462> ;

_:concert a dpla:SourceResource ;
  dc:title "Afternoon Concert, Bath House" ;
  dcterms:medium <http://id.loc.gov/authorities/subjects/sh85105462> ;

_:cityhall a dpla:SourceResource ;
  dc:title "City Hall" ;
  dcterms:medium <http://id.loc.gov/authorities/subjects/sh85105462> ;


```
