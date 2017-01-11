var updateFooterDetails = (function() {
  var agencyDetails = {
    name: 'The MTM Agency',
    websiteUrl: 'http://themtmagency.com'
  };
  var $footerUpdateTrigger = $('[data-footer-update]');
  var footerUpdateValue = $footerUpdateTrigger[0].attributes[0].value;
  var $footerCurrentYear = $('.js-footer-current-year');
  var $footerAgency = $('.js-footer-agency');
  var currentYear = new Date().getFullYear();

  // Add current year
  $footerCurrentYear.text(currentYear);

  // Check if endpoint present and not empty string
  if ($footerUpdateTrigger.length && footerUpdateValue === 'true') {
    // Update href and text of agency
    $footerAgency.attr('href', agencyDetails.websiteUrl)
      .text(agencyDetails.name);
  }
})();
