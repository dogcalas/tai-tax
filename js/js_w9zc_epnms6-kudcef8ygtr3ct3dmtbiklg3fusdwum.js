/**
 * Created by mxionut on 10/11/17.
 */

(function ($) {
  Drupal.behaviors.tai = {
    attach: function (context, settings) {

      $("a.pathway-link").click(function(e) {
        nid = $(this).attr('rel');
        $("a#tab-id-" + nid).trigger('click');

        e.preventDefault();
      });

      if ($('#grantee-compare-inner').length) {
        grantees = $("#grantee-compare-inner .tab-pane-compare").length;
        $("#grantee-compare-inner").width(grantees * 420);

        $("#grantee-filters input").change(function() {
          val = $(this).val();

          if ($(this).is(":checked")) {
            $(".grantee-" + val).show();
          }
          else {
            $(".grantee-" + val).hide();
          }
        });

        $(".grantee-checkbox").change(function() {
          nid = $(this).attr('rel');

          if ($(this).is(":checked")) {
            $("#TabCompare-" + nid).show();
            $(this).parent().parent().addClass('active');
          }
          else {
            $("#TabCompare-" + nid).hide();
            $(this).parent().parent().removeClass('active');
          }
        });

        $("#grantee-checkbox-1").trigger('click').trigger('change');
        $("#grantee-checkbox-2").trigger('click').trigger('change');

        $(".nav-tabs a").click(function(e) {
          $(this).parent().find('input').trigger('click').trigger('change');
          // $(this).parent().toggleClass('active');
        });

      }


    }
  };
}(jQuery));;
