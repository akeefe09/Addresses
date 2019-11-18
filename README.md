This is a sample of some of the production code I worked on for the HelloHealth EHR. It is not the exact code we use, but it is based on it to give an idea.

The most important part was supporting multiple countries. The countryState component provides the State and Country dropdown selects. The states or provinces fill the dropdown based on which country is selected.

If you switch from "United States" to "Australia", for instance, this will update the State select with the Australian states without needing to refresh the page.

It will also update the regex validator for the zipCode component, which listens to changes in the Country select to update its validation if the country changes. Again, this does not require a reload of the page.

The actual validation is done in an in-house library file we call mycalib, of which I have provided a small commented snippet. We use integrate this with the parsley library for form validation.

patientRecordGeneric.java contains examples of some of the tests that were written for the main three markets we need to support (Australia/USA/Canada).