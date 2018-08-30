/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */
 // Setup module
 // ------------------------------

 var H1BPrototype = function() {

   var _setupDatatable = function() {

 $('.datatable-basic').DataTable({
 	autoWidth: false,
 	dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
     language: {
         search: '<span>Filter:</span> _INPUT_',
         lengthMenu: '<span>Show:</span> _MENU_',
         paginate: { 'first': 'First', 'last': 'Last', 'next': '→', 'previous': '←' }
     }
 });
};

 //
     // Return objects assigned to module
     //

     return {
         init: function() {
             _setupDatatable();
         }
     }

}();
 // Initialize module
 // ------------------------------

 document.addEventListener('DOMContentLoaded', function() {
     H1BPrototype.init();
 });
