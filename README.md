Footer update
-------------

This script will automatically update current year and agency details (name and website URL) on website's footer.

For this script to work all websites' footer must include the following attributes into their markup.

* `data-footer-update="true"`  on the footer element. If set to `false` footer will not update.
* `class="js-footer-current-year"` on the element wrapping the year.
* `class="js-footer-agency"` on the anchor tag containing the agency name and website url.

Script will run from a CDN.
To trigger the script please place this snippet
```
<script src=""></script>
```
before the closing `</body>` tag.
