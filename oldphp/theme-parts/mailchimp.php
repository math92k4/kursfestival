<div id="mc_embed_signup">
    <form action="https://mathaeusss.us20.list-manage.com/subscribe/post?u=67ab57d5b35d968e6bada564b&id=e60f5c2dda" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
            <p>TILMELD NYHEDSBREV</p>
            <div class="mc-field-group">
                <input placeholder="min@email.dk" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
            </div>
            <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
            </div>
            <div class="optionalParent">
                <div class="clear foot">
                    <input type="submit" value="TILMELD" name="subscribe" id="mc-embedded-subscribe" class="button">
                </div>
            </div>
        </div>
    </form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
<script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script>

<script>
    // select the target node
    const succes = document.querySelector('#mce-success-response');

    // create an observer instance
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (succes.innerHTML === "Thank you for subscribing!") {
            succes.innerHTML = "Tak for din tilmelding!";
            }
        });
    });

    // configuration of the observer:
    const config = { attributes: true, childList: true, characterData: true };

    // pass in the target node, as well as the observer options
    observer.observe(succes, config);
</script>



