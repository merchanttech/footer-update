Footer update
-------------

This script will automatically update current year and agency details (name and website URL) on website's footer.

For this script to work all websites' footer must include the following attributes into their markup.

* `data-footer-update="true"`  on the footer element. If set to `false` footer will not update.
* `class="js-footer-current-year"` on the element wrapping the year.
* `class="js-footer-agency"` on the anchor tag containing the agency name and website url.

Example:
```html
<!-- Add 'data-footer-update' attribute with the value of true to footer -->
<footer data-footer-update="true">
  <!-- Add 'js-footer-current-year' class to copyright year -->
  <p>&copy; <span class="js-footer-current-year">2010</span> Website name</p>
  <!-- Add 'js-footer-agency-url' class to agency website anchor tag -->
  <p>Built by <a class="js-footer-agency" href="http://merchanttechnology.co.uk">Merchant Technology Marketing</a></p>
</footer>
```

Script will run from a CDN.
To trigger the script please place this snippet
```javascript
<script src="https://gitcdn.link/repo/merchanttech/footer-update/master/footer-update.js"></script>
```
before the closing `</body>` tag.
