var makeInspectionTypeSelect2 = function () {
  $('#inspectionType').select2({

                                 width: '100%',
                                 dropdownParent: $("#addBillModal"),
                                 placeholder: "Search :  Bill Number/ Name / Phone Number",
                                 ajax: {
                                   url: 'http://localhost:5000/bill/getJson',
                                   dataType: "json",
                                   type: "GET",
                                   data: function (params) {

                                     var queryParameters = {
                                       term: params.term
                                     }
                                     return queryParameters;
                                   },
                                   processResults: function (data) {
                                     return {
                                       results: $.map(data, function (item) {
                                         return {
                                           text: item.id,
                                           id: item.text
                                         }
                                       })
                                     };
                                   }
                                 }

                               });

}
var makeMedicineTypeSelect2 = function () {
  $('#medicineType').select2({

                               width: '100%',
                               dropdownParent: $("#addBillModal"),
                               placeholder: "Search :  Bill Number/ Name / Phone Number",
                               ajax: {
                                 url: 'http://localhost:5000/bill/getJson',
                                 dataType: "json",
                                 type: "GET",
                                 data: function (params) {

                                   var queryParameters = {
                                     term: params.term
                                   }
                                   return queryParameters;
                                 },
                                 processResults: function (data) {
                                   return {
                                     results: $.map(data, function (item) {
                                       return {
                                         text: item.id,
                                         id: item.text
                                       }
                                     })
                                   };
                                 }
                               }

                             })
}

var makesearchSelect2 = function () {

  $('#searchBox').select2({
                            width: '100%',
                            placeholder: "Search :  Bill Number/ Name / Phone Number",
                            ajax: {
                              url: 'http://localhost:5000/bill/getJson',
                              dataType: "json",
                              type: "GET",
                              data: function (params) {

                                var queryParameters = {
                                  term: params.term
                                }
                                return queryParameters;
                              },
                              processResults: function (data) {
                                return {
                                  results: $.map(data, function (item) {
                                    return {
                                      text: item.id,
                                      id: item.text
                                    }
                                  })
                                };
                              }
                            }
                          });

}