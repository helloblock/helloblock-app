angular.module('hbApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/404.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>The page you were looking for doesn't exist (404)</title>\n" +
    "  <style>\n" +
    "  body {\n" +
    "    background-color: #EFEFEF;\n" +
    "    color: #2E2F30;\n" +
    "    text-align: center;\n" +
    "    font-family: arial, sans-serif;\n" +
    "  }\n" +
    "\n" +
    "  div.dialog {\n" +
    "    width: 25em;\n" +
    "    margin: 4em auto 0 auto;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-left-color: #999;\n" +
    "    border-bottom-color: #BBB;\n" +
    "    border-top: #B00100 solid 4px;\n" +
    "    border-top-left-radius: 9px;\n" +
    "    border-top-right-radius: 9px;\n" +
    "    background-color: white;\n" +
    "    padding: 7px 4em 0 4em;\n" +
    "  }\n" +
    "\n" +
    "  h1 {\n" +
    "    font-size: 100%;\n" +
    "    color: #730E15;\n" +
    "    line-height: 1.5em;\n" +
    "  }\n" +
    "\n" +
    "  body > p {\n" +
    "    width: 33em;\n" +
    "    margin: 0 auto 1em;\n" +
    "    padding: 1em 0;\n" +
    "    background-color: #F7F7F7;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-bottom-color: #999;\n" +
    "    border-bottom-left-radius: 4px;\n" +
    "    border-bottom-right-radius: 4px;\n" +
    "    border-top-color: #DADADA;\n" +
    "    color: #666;\n" +
    "    box-shadow:0 3px 8px rgba(50, 50, 50, 0.17);\n" +
    "  }\n" +
    "  </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "  <!-- This file lives in public/404.html -->\n" +
    "  <div class=\"dialog\">\n" +
    "    <h1>The page you were looking for doesn't exist.</h1>\n" +
    "    <p>You may have mistyped the address or the page may have moved.</p>\n" +
    "  </div>\n" +
    "  <p>If you are the application owner check the logs for more information.</p>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('/422.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>The change you wanted was rejected (422)</title>\n" +
    "  <style>\n" +
    "  body {\n" +
    "    background-color: #EFEFEF;\n" +
    "    color: #2E2F30;\n" +
    "    text-align: center;\n" +
    "    font-family: arial, sans-serif;\n" +
    "  }\n" +
    "\n" +
    "  div.dialog {\n" +
    "    width: 25em;\n" +
    "    margin: 4em auto 0 auto;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-left-color: #999;\n" +
    "    border-bottom-color: #BBB;\n" +
    "    border-top: #B00100 solid 4px;\n" +
    "    border-top-left-radius: 9px;\n" +
    "    border-top-right-radius: 9px;\n" +
    "    background-color: white;\n" +
    "    padding: 7px 4em 0 4em;\n" +
    "  }\n" +
    "\n" +
    "  h1 {\n" +
    "    font-size: 100%;\n" +
    "    color: #730E15;\n" +
    "    line-height: 1.5em;\n" +
    "  }\n" +
    "\n" +
    "  body > p {\n" +
    "    width: 33em;\n" +
    "    margin: 0 auto 1em;\n" +
    "    padding: 1em 0;\n" +
    "    background-color: #F7F7F7;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-bottom-color: #999;\n" +
    "    border-bottom-left-radius: 4px;\n" +
    "    border-bottom-right-radius: 4px;\n" +
    "    border-top-color: #DADADA;\n" +
    "    color: #666;\n" +
    "    box-shadow:0 3px 8px rgba(50, 50, 50, 0.17);\n" +
    "  }\n" +
    "  </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "  <!-- This file lives in public/422.html -->\n" +
    "  <div class=\"dialog\">\n" +
    "    <h1>The change you wanted was rejected.</h1>\n" +
    "    <p>Maybe you tried to change something you didn't have access to.</p>\n" +
    "  </div>\n" +
    "  <p>If you are the application owner check the logs for more information.</p>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('/500.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>We're sorry, but something went wrong (500)</title>\n" +
    "  <style>\n" +
    "  body {\n" +
    "    background-color: #EFEFEF;\n" +
    "    color: #2E2F30;\n" +
    "    text-align: center;\n" +
    "    font-family: arial, sans-serif;\n" +
    "  }\n" +
    "\n" +
    "  div.dialog {\n" +
    "    width: 25em;\n" +
    "    margin: 4em auto 0 auto;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-left-color: #999;\n" +
    "    border-bottom-color: #BBB;\n" +
    "    border-top: #B00100 solid 4px;\n" +
    "    border-top-left-radius: 9px;\n" +
    "    border-top-right-radius: 9px;\n" +
    "    background-color: white;\n" +
    "    padding: 7px 4em 0 4em;\n" +
    "  }\n" +
    "\n" +
    "  h1 {\n" +
    "    font-size: 100%;\n" +
    "    color: #730E15;\n" +
    "    line-height: 1.5em;\n" +
    "  }\n" +
    "\n" +
    "  body > p {\n" +
    "    width: 33em;\n" +
    "    margin: 0 auto 1em;\n" +
    "    padding: 1em 0;\n" +
    "    background-color: #F7F7F7;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-bottom-color: #999;\n" +
    "    border-bottom-left-radius: 4px;\n" +
    "    border-bottom-right-radius: 4px;\n" +
    "    border-top-color: #DADADA;\n" +
    "    color: #666;\n" +
    "    box-shadow:0 3px 8px rgba(50, 50, 50, 0.17);\n" +
    "  }\n" +
    "  </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "  <!-- This file lives in public/500.html -->\n" +
    "  <div class=\"dialog\">\n" +
    "    <h1>We're sorry, but something went wrong.</h1>\n" +
    "  </div>\n" +
    "  <p>If you are the application owner check the logs for more information.</p>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('/templates/_explorer_response.html',
    "STATUS CODE: {{response.code}}\n" +
    "\n" +
    "BODY:\n" +
    "\n" +
    "{{response.body}}\n"
  );


  $templateCache.put('/templates/brand.html',
    "<h1 ng-non-bindable>\n" +
    "  <code>{{Hello, Block}}</code>\n" +
    "</h1>\n" +
    "<h1 ng-non-bindable>\n" +
    "  {{Hello, Block}}\n" +
    "</h1>\n" +
    "<h1 ng-non-bindable>\n" +
    "  Hello, Block\n" +
    "</h1>\n" +
    "\n" +
    "<h1 ng-non-bindable>\n" +
    "  &lt;code /&gt; Hello, Block\n" +
    "</h1>\n" +
    "\n" +
    "<h1 ng-non-bindable>\n" +
    "  Hello, &lt;Block /&gt;\n" +
    "</h1>\n" +
    "\n" +
    "<div tester></div>\n" +
    "\n" +
    "\n" +
    "api.helloblock.io/v1/ ???\n" +
    "\n" +
    "main.helloblock.io/v1/\n" +
    "test.helloblock.io/v1/\n" +
    "\n" +
    "\n" +
    "test.helloblock.io/b/\n"
  );


  $templateCache.put('/templates/components/_navbar.html',
    "<div class=\"navbar navbar-inverse\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#!\">\n" +
    "        <span ng-non-bindable>\n" +
    "          Hello, block!\n" +
    "        </span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li>\n" +
    "          <a href=\"https://www.github.com/BitcoinMafia/\" target=\"_blank\">\n" +
    "            <i class=\"fa fa-code\"></i>\n" +
    "            <span>Contribute</span>\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li\n" +
    "          ng-class=\"{'active': global.isOnLink('/docs')}\">\n" +
    "          <a href=\"#!/docs\">\n" +
    "            <i class=\"fa fa-book\"></i>\n" +
    "            <span>Documentation</span>\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': global.isOnLink('/explorer')}\">\n" +
    "          <a href=\"#!/explorer\">\n" +
    "            <i class=\"fa fa-search\"></i>\n" +
    "            <span>API Explorer</span>\n" +
    "          </a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.nav-collapse -->\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/components/_sidebar.html',
    "<div class=\"bs-sidebar static\">\n" +
    "  <ul class=\"nav bs-sidenav\">\n" +
    "    <li>\n" +
    "      <div class=\"title\">\n" +
    "        <h5>\n" +
    "          <strong>API</strong>\n" +
    "        </h5>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "    <li\n" +
    "      ng-repeat=\"s in general\"\n" +
    "      spy=\"{{s.name}}\"\n" +
    "    >\n" +
    "      <a href=\"#!/docs/#{{s.name}}\">{{s.name.capitalize()}}</a>\n" +
    "      <ul class=\"nav\">\n" +
    "        <li ng-repeat=\"sub in s.subs.slice(1)\" spy=\"{{sub.id}}\">\n" +
    "          <span class='sub'>\n" +
    "            <a href=\"/#!/docs#{{sub.id}}\">{{sub.name.capitalize()}}</a>\n" +
    "          </span>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <div class=\"title\">\n" +
    "        <h5>\n" +
    "          <strong>Resources</strong>\n" +
    "        </h5>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "    <li\n" +
    "      ng-repeat=\"s in resources\"\n" +
    "      spy=\"{{s.name}}\"\n" +
    "    >\n" +
    "      <a href=\"#!/docs/#{{s.name}}\">{{s.name.capitalize()}}</a>\n" +
    "      <ul class=\"nav\">\n" +
    "        <li ng-repeat=\"sub in s.subs.slice(1)\" spy=\"{{sub.id}}\">\n" +
    "          <span class='sub'>\n" +
    "            <a href=\"/#!/docs#{{sub.id}}\">{{sub.name.capitalize()}}</a>\n" +
    "          </span>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/docs.html',
    "<div id=\"docs\" scroll-spy>\n" +
    "  <!-- SIDEBAR -->\n" +
    "  <div class=\"col-md-2\">\n" +
    "    <div class=\"bs-sidebar static\">\n" +
    "      <ul class=\"nav bs-sidenav\">\n" +
    "        <li>\n" +
    "          <div class=\"title\">\n" +
    "            <h5>\n" +
    "              <strong>API</strong>\n" +
    "            </h5>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li\n" +
    "          ng-repeat=\"s in general\"\n" +
    "          spy=\"{{s.name}}\"\n" +
    "        >\n" +
    "          <a href=\"#!/docs/#{{s.name}}\">{{s.name.capitalize()}}</a>\n" +
    "          <ul class=\"nav\">\n" +
    "            <li ng-repeat=\"sub in s.subs.slice(1)\" spy=\"{{sub.id}}\">\n" +
    "              <span class='sub'>\n" +
    "                <a href=\"/#!/docs#{{sub.id}}\">{{sub.name.capitalize()}}</a>\n" +
    "              </span>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <div class=\"title\">\n" +
    "            <h5>\n" +
    "              <strong>Resources</strong>\n" +
    "            </h5>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li\n" +
    "          ng-repeat=\"s in resources\"\n" +
    "          spy=\"{{s.name}}\"\n" +
    "        >\n" +
    "          <a href=\"#!/docs/#{{s.name}}\">{{s.name.capitalize()}}</a>\n" +
    "          <ul class=\"nav\">\n" +
    "            <li ng-repeat=\"sub in s.subs.slice(1)\" spy=\"{{sub.id}}\">\n" +
    "              <span class='sub'>\n" +
    "                <a href=\"/#!/docs#{{sub.id}}\">{{sub.name.capitalize()}}</a>\n" +
    "              </span>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- LANGUAGE -->\n" +
    "  <div class=\"col-md-10\" >\n" +
    "    <div id=\"language-setter\">\n" +
    "      <div class=\"col-md-6\"></div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <a\n" +
    "          class=\"btn btn-sm btn-default\"\n" +
    "          ng-class=\"{'btn-primary': global.language === 'curl'}\"\n" +
    "          ng-click=\"global.setLanguage('curl')\"\n" +
    "        >\n" +
    "          Curl\n" +
    "        </a>\n" +
    "        <a\n" +
    "          class=\"btn btn-sm btn-default\"\n" +
    "          ng-class=\"{'btn-primary': global.language === 'ruby'}\"\n" +
    "          ng-click=\"global.setLanguage('ruby')\"\n" +
    "        >\n" +
    "          Ruby\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- METHOD -->\n" +
    "    <div class=\"sections\">\n" +
    "      <span ng-repeat=\"s in sections\" id=\"{{s.name}}\">\n" +
    "        <div class=\"line\" ng-cloak></div>\n" +
    "        <span ng-repeat=\"sub in s.subs\" id=\"{{sub.id}}\">\n" +
    "          <div class=\"row section\">\n" +
    "            <div class=\"col-md-6 section-description\" >\n" +
    "              <br>\n" +
    "              <div\n" +
    "                ng-if=\"sub.name !== undefined\"\n" +
    "                ng-include=\"docsUrl(s.name, sub.file, 'description')\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 section-example\">\n" +
    "              <div ng-show=\"global.language === 'curl'\">\n" +
    "                <div\n" +
    "                  ng-if=\"sub.name !== undefined\"\n" +
    "                  ng-include=\"docsUrl(s.name, sub.file, 'curl')\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div ng-show=\"global.language === 'ruby'\">\n" +
    "                <div\n" +
    "                  ng-if=\"sub.name !== undefined\"\n" +
    "                  ng-include=\"docsUrl(s.name, sub.file, 'ruby')\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </span>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "    <!-- <div class=\"blank\">\n" +
    "      <br><br><br><br><br><br><br><br><br>\n" +
    "      <br><br><br><br><br><br><br><br><br>\n" +
    "      <br><br><br><br><br><br><br><br><br>\n" +
    "    </div> -->\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/docs/addresses/batch/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://api.helloblock.io/v1/addresses?addresses[]=<span class=\"text-primary\">&lt;address&gt;</span></code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl -G https://api.helloblock.io/v1/addresses \\\n" +
    "   -d \"addresses[]=<span class='text-primary'>mu1izpJmF7CHnbVcH59f1PqfvXnmiBEMq8</span>\" \\\n" +
    "   -d \"addresses[]=<span class='text-primary'>mvANEVQRsAC7xHt4GW2iSsJwUSMgkGX2k3</span>\" \\\n" +
    "   -d \"addresses[]=<span class='text-primary'>n1Fr4r3wEcbXZGQJaqJkFRiMpYLAsk81RX</span>\" \\\n" +
    "   -d \"tx=true\" \\\n" +
    "   -d \"wallet=true\" \\\n" +
    "   -d \"info=true\"\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST URL</div>\n" +
    "<pre>\n" +
    "  <code class=\"markdown\" hljs>\n" +
    "https://api.helloblock.io/v1/addresses?&addresses[]=mu1izpJmF7CHnbVcH59f1PqfvXnmiBEMq8&addresses[]=mvANEVQRsAC7xHt4GW2iSsJwUSMgkGX2k3&addresses[]=n1Fr4r3wEcbXZGQJaqJkFRiMpYLAsk81RX&tx=true&wallet=true&info=true\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"wallet\": {\n" +
    "    \"tx_n\": 6,\n" +
    "    \"total_received_n\": 2,\n" +
    "    \"total_received\": 8565778,\n" +
    "    \"total_sent_n\": 3,\n" +
    "    \"total_sent\": 8565778,\n" +
    "    \"balance\": 0\n" +
    "  },\n" +
    "  \"addresses\": [ {\n" +
    "    \"total_received\": 4122889,\n" +
    "    \"total_received_n\": 1,\n" +
    "    \"total_sent\": 4122889,\n" +
    "    \"total_sent_n\": 1,\n" +
    "    \"tx_n\": 2,\n" +
    "    \"balance\": 0,\n" +
    "    \"address\": \"mu1izpJmF7CHnbVcH59f1PqfvXnmiBEMq8\",\n" +
    "    \"hash160\": \"940a991f8dd0f8d7609cb8e3f07235d3a136413a\"\n" +
    "  }, {\n" +
    "    \"total_received\": 100000,\n" +
    "    \"total_received_n\": 1,\n" +
    "    \"total_sent\": 100000,\n" +
    "    \"total_sent_n\": 1,\n" +
    "    \"tx_n\": 2,\n" +
    "    \"balance\": 0,\n" +
    "    \"address\": \"mvANEVQRsAC7xHt4GW2iSsJwUSMgkGX2k3\",\n" +
    "    \"hash160\": \"a0a5226c2e376c929d800a070399e5a3d0277c6e\"\n" +
    "  }, {\n" +
    "    \"total_received\": 4342889,\n" +
    "    \"total_received_n\": 1,\n" +
    "    \"total_sent\": 4342889,\n" +
    "    \"total_sent_n\": 1,\n" +
    "    \"tx_n\": 2,\n" +
    "    \"balance\": 0,\n" +
    "    \"address\": \"n1Fr4r3wEcbXZGQJaqJkFRiMpYLAsk81RX\",\n" +
    "    \"hash160\": \"d88713de7b1d0837e728de5d5e62399f5e6e145e\"\n" +
    "  } ],\n" +
    "  \"txs\": [\n" +
    "    ... Transaction Objects\n" +
    "  ],\n" +
    "  \"info\": [\n" +
    "    TODO\n" +
    "  ]\n" +
    "}\n" +
    "\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/addresses/batch/_description.html',
    "<h3>Retrieve multiple Addresses</h3>\n" +
    "<br>\n" +
    "<p>Gets and returns data for multiple addresses.</p>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>addresses[]: </td>\n" +
    "      <td>\n" +
    "        <em>string</em> <span class='label label-primary'>REQUIRED</span>\n" +
    "        <br><br>\n" +
    "        <div>\n" +
    "          Repeat for multiple addresses, e.g.\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          \"addresses[]=<em>&</em>addresses[]=<em>&</em>addresses[]=c\"\n" +
    "        </div>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>txs: </td>\n" +
    "      <td>\n" +
    "        <em>boolean</em> <span class='label label-warning'>OPTIONAL</span> default: true</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>wallet: </td>\n" +
    "      <td>\n" +
    "        <em>boolean</em> <span class='label label-warning'>OPTIONAL</span> default: true</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>info: </td>\n" +
    "      <td>\n" +
    "        <em>boolean</em> <span class='label label-warning'>OPTIONAL</span> default: true</td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>wallet <span class='label label-warning'>OPTIONAL</span>: </td>\n" +
    "      <td>\n" +
    "        <p>Wallet Object</p>\n" +
    "        <table class='table table-bordered table-condensed table-docs'>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>tx_n</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>total_received_n</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>total_received</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>total_sent_n</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>total_sent</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>balance</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>addresses: </td>\n" +
    "      <td>\n" +
    "        <p><em>array</em> of Address Objects</p>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>txs <span class='label label-warning'>OPTIONAL</span>: </td>\n" +
    "      <td>\n" +
    "        <p><em>array</em> of Transaction Objects</p>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>info <span class='label label-warning'>OPTIONAL</span>: </td>\n" +
    "      <td>\n" +
    "        <p>Info Object</p>\n" +
    "        <table class='table table-bordered table-condensed table-docs'>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>tx_n</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>total_received_n</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>total_received</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>total_sent_n</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>total_sent</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>balance</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/addresses/batch/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/addresses/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/addresses/intro/_description.html',
    "<h2>Addresses</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "</p>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/addresses/intro/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/addresses/single/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://api.helloblock.io/v1/addresses/<span class='text-primary'>&lt;address&gt;</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl -G https://api.helloblock.io/v1/addresses/ \\\n" +
    "  <span class='text-primary'>n25NdiLR7X6TPLRkpYSX3zn6kLYGWLPMnK</span> \\\n" +
    "  -d \"txs=true\"\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST URL</div>\n" +
    "<pre>\n" +
    "  <code class=\"markdown\" hljs>\n" +
    "https://api.helloblock.io/v1/addresses/<span class=''>n25NdiLR7X6TPLRkpYSX3zn6kLYGWLPMnK</span>&txs=true\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"total_received\": 100000,\n" +
    "  \"total_received_n\": 1,\n" +
    "  \"total_sent\": 100000,\n" +
    "  \"total_sent_n\": 1,\n" +
    "  \"tx_n\": 2,\n" +
    "  \"balance\": 0,\n" +
    "  \"address\": \"n25NdiLR7X6TPLRkpYSX3zn6kLYGWLPMnK\",\n" +
    "  \"hash160\": \"e18424c2562c495e16c4a67d9bf803116158be6e\"\n" +
    "  \"txs\": [\n" +
    "    ... Transaction Objects\n" +
    "  ]\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/addresses/single/_description.html',
    "<h3>Retrieve an Address</h3>\n" +
    "<br>\n" +
    "<p>Gets and returns data for a single address.</p>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>address: </td>\n" +
    "      <td><em>string</em> <span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>txs: </td>\n" +
    "      <td><em>boolean</em> <span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>total_received: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>total_received_n: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>total_sent: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>total_sent_n: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>tx_n: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>balance: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>address: </td>\n" +
    "      <td><em>string</em> (base58)</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>hash160: </td>\n" +
    "      <td><em>string</em> (hash160)</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>txs: </td>\n" +
    "      <td><em>array</em> of Transaction Objects</td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/addresses/single/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/blocks/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/blocks/intro/_description.html',
    "<h2>Blocks</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "</p>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/blocks/intro/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/blocks/single/_curl.html',
    "<br><br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://api.helloblock.io/v1/blocks/<span class='text-primary'>&lt;block_height&gt;</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://api.helloblock.io/v1/blocks/<span class='text-primary'>100000</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST URL</div>\n" +
    "https://api.helloblock.io/v1/blocks/100000\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "TO DO\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/blocks/single/_description.html',
    "<h3>Retrieve a Block</h3>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>block_height: </td>\n" +
    "      <td><em>integer</em> <span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>txs: </td>\n" +
    "      <td><em>boolean</em> <span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>TODO: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>TODO: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/blocks/single/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/errors/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/errors/intro/_description.html',
    "<h2>Errors</h2>\n" +
    "<br>\n" +
    "<code class=\"single\">\n" +
    "  https://api.helloblock.io/v1/\n" +
    "</code>\n" +
    "<br><br>\n" +
    "<p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "</p>\n" +
    "<br>\n" +
    "<p>\n" +
    "  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "</p>\n" +
    "\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/errors/intro/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/introduction/intro/_curl.html',
    "<br><br><br>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "  echo \"Hello, block!\"\n" +
    "  </code>\n" +
    "\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/introduction/intro/_description.html',
    "<h2>Introduction</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "</p>\n" +
    "<br>\n" +
    "<p>\n" +
    "  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "</p>\n" +
    "\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/introduction/intro/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/transactions/batch/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://api.helloblock.io/v1/transactions?tx_hashes[]=<span class=\"text-primary\">&lt;tx_hash&gt;</span></code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl -G https://api.helloblock.io/v1/transactions \\\n" +
    "   -d \"tx_hashes[]=<span class='text-primary'>6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3</span>\" \\\n" +
    "   -d \"tx_hashes[]=<span class='text-primary'>770e6e4c66fc61fb523e5aefe11780b26c8473638e7065ca726a6492ab7f6345</span>\" \\\n" +
    "   -d \"tx_hashes[]=<span class='text-primary'>47bf46f92384002dc008696dac3437a2ca4a2696c21a3f6d1d789513e7b9a3f0</span>\"\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST URL</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "https://api.helloblock.io/v1/transactions?tx_hashes[]=6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3&tx_hashes[]=770e6e4c66fc61fb523e5aefe11780b26c8473638e7065ca726a6492ab7f6345&tx_hashes[]=47bf46f92384002dc008696dac3437a2ca4a2696c21a3f6d1d789513e7b9a3f0\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "[ {\n" +
    "    \"time\": 1388684762,\n" +
    "    \"block_hash\": \"00000000ba5b52e73bced6159bbd67602d0108816f4eaad8c669c4a78132c254\",\n" +
    "    \"block_height\": 155064,\n" +
    "    \"hash\": \"47bf46f92384002dc008696dac3437a2ca4a2696c21a3f6d1d789513e7b9a3f0\",\n" +
    "    \"ver\": 1,\n" +
    "    \"lock_time\": 0,\n" +
    "    \"size\": 376,\n" +
    "    \"tx_id\": 997342,\n" +
    "    \"vin_sz\": 2,\n" +
    "    \"vout_sz\": 2,\n" +
    "    \"in\": [ {\n" +
    "      \"prev_out\": {\n" +
    "        \"n\": 0,\n" +
    "        \"hash\": \"75b1129641016a1762110ec82b5ccb42bd34a1213485d2b93792ca7456eb983d\",\n" +
    "        \"tx_id\": 996982,\n" +
    "        \"value\": 100000,\n" +
    "        \"address\": \"mk1caepuZCUNELK7P1t8cP8GtqZPcdzibr\",\n" +
    "        \"hash160\": \"314c1c19a662147ebafee5841e10b629f0a680ef\"\n" +
    "      },\n" +
    "      \"scriptSig\": \"493046022100bce7fe3cc1120f524af14ff157c9558b218e2c7e1f9722955d7bd34d31ccadca022100f4aa43e73a64e5aeceeaf237c94ed7e4b478d64241c640028067393bd2688464012103ba3fa2f1d35c2d8acf7a66f997a140e8d2be69dc0d054a26b46c2f1d50b2366a\"\n" +
    "    }, {\n" +
    "      \"prev_out\": {\n" +
    "        \"n\": 1,\n" +
    "        \"hash\": \"212da0321924ca43ec6645e69ebb5404877cf7e51d1a2ebbb800d3cddbd0c0c9\",\n" +
    "        \"tx_id\": 996979,\n" +
    "        \"value\": 1030397,\n" +
    "        \"address\": \"mnmZ2hevsK1pEnpCtywYH1Sn1qKXi9DRGi\",\n" +
    "        \"hash160\": \"4f8bb314083164c857176c5ff6f29d14eb8f78a9\"\n" +
    "      },\n" +
    "      \"scriptSig\": \"493046022100bf9d8c0e0b470eff1721e4c0afadb5d7d28f2b68a9f3a315399ebc61bca7c0c3022100b30be2ea458f34b7e7a91845ac437a528f6444b85eb2fe0f2adc8022c59d133a012102088960746782c504b30f39ab8e02f5a0360c2b9f392091f7a46246f0fe18a72d\"\n" +
    "    } ],\n" +
    "    \"out\": [ {\n" +
    "      \"n\": 0,\n" +
    "      \"value\": 1020397,\n" +
    "      \"scriptPubKey\": \"76a9143488c0786a4cc76c59dc509654831ba5b34a079988ac\",\n" +
    "      \"spent\": true,\n" +
    "      \"address\": \"mkJjFiLGTTZxc9gynVHZ3nam17aaQdZU75\"\n" +
    "    }, {\n" +
    "      \"n\": 1,\n" +
    "      \"value\": 100000,\n" +
    "      \"scriptPubKey\": \"76a914dfcb6c48e49b7a6d9d4f51e174f587a9b8ae33aa88ac\",\n" +
    "      \"spent\": true,\n" +
    "      \"address\": \"n1vGfugd2W27SkG5TZiWpmDzQrvtxAgFJw\"\n" +
    "    } ]\n" +
    "  },\n" +
    "\n" +
    "  ... etc\n" +
    "\n" +
    "]\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/transactions/batch/_description.html',
    "<h3>Retrieve multiple Transactions</h3>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>tx_hashes=[]: </td>\n" +
    "      <td>\n" +
    "        <em>array of</em> <em>strings</em><span class='label label-primary'>REQUIRED</span>\n" +
    "        <br><br>\n" +
    "        <div>\n" +
    "          Repeat for multiple transactions, e.g.\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          \"tx_hashes[]=<em>&</em>tx_hashes[]=<em>&</em>tx_hashes[]=c\"\n" +
    "        </div>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<p>\n" +
    "  Returns <em>array</em> of Transaction Objects\n" +
    "</p>\n"
  );


  $templateCache.put('/templates/docs/transactions/batch/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/transactions/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/transactions/intro/_description.html',
    "<h2>Transactions</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "</p>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/transactions/intro/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/transactions/post/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "POST https://api.helloblock.io/v1/transactions/\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl -X POST https://api.helloblock.io/v1/transactions \\\n" +
    " - d \"tx_hex=<span class='text-primary'>TODO</span>\"\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"message\": \"Transaction propagation has been successful.\"\n" +
    "  \"tx_hash\": TODO\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/transactions/post/_description.html',
    "<h3>Propagate a Transaction</h3>\n" +
    "<br>\n" +
    "<p><strong>Arguments</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>tx_hex: </td>\n" +
    "      <td><em>string</em> <span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>message: </td>\n" +
    "      <td>\n" +
    "        <em>string</em>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>tx_hash: </td>\n" +
    "      <td>\n" +
    "        <em>string</em>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/transactions/post/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/transactions/single/_curl.html',
    "<br><br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://api.helloblock.io/v1/transactions/<span class='text-primary'>&lt;tx_hash&gt;</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl -v -G https://api.helloblock.io/v1/transactions/\\\n" +
    "<span class='text-primary no-highlight'>2542cd64e02d902975dc6e2e97797ceec5a84e8597c80d22a9e2dbd16e748738</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST URL</div>\n" +
    "<pre>\n" +
    "  <code class=\"markdown\" hljs>\n" +
    "https://api.helloblock.io/v1/transactions/2542cd64e02d902975dc6e2e97797ceec5a84e8597c80d22a9e2dbd16e748738\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"hash\": \"2542cd64e02d902975dc6e2e97797ceec5a84e8597c80d22a9e2dbd16e748738\",\n" +
    "  \"ver\": 1,\n" +
    "  \"lock_time\": 0,\n" +
    "  \"size\": 226,\n" +
    "  \"tx_id\": 994531,\n" +
    "  \"vin_sz\": 1,\n" +
    "  \"vout_sz\": 2,\n" +
    "  \"in\": [ {\n" +
    "    \"prev_out\": {\n" +
    "      \"n\": 0,\n" +
    "      \"hash\": \"ff9e7a02702ea393facf57d94f233e58a29a9d7c2f3080bf404b1ec5ec572eb2\",\n" +
    "      \"tx_id\": 994520,\n" +
    "      \"value\": 53022177768,\n" +
    "      \"address\": \"mjswyggXrNJKdb1PHEfqrFxyefwFnn1q68\",\n" +
    "      \"hash160\": \"2fd8f955587181fdf2caded0d41c8f52c084cee4\"\n" +
    "    },\n" +
    "    \"scriptSig\": \"483045022100cc3a4f04c04b3aa6c4c98632f72641112e027a0f2280351e5722449c658d4a6c0220074f0537f668d4049c7b0da91486d6d83a2f37a60512a1771aedc35c97f0e92b0121038708f0be6ec42ff5788c5cd51c87f245538c1ecf890c12774fe006b55797c114\"\n" +
    "  } ],\n" +
    "  \"out\": [ {\n" +
    "    \"n\": 0,\n" +
    "    \"value\": 46970000,\n" +
    "    \"scriptPubKey\": \"76a9144465358b1c07d001a49216c466b6e8de5c708d9988ac\",\n" +
    "    \"spent\": false,\n" +
    "    \"address\": \"mmkbVEWhehm6mKUgV36K6oWX4BCZcp5by3\"\n" +
    "  }, {\n" +
    "    \"n\": 1,\n" +
    "    \"value\": 52975207768,\n" +
    "    \"scriptPubKey\": \"76a9146a0d58b53a6b6aef32d5907e237ad57e6d84d0d688ac\",\n" +
    "    \"spent\": true,\n" +
    "    \"address\": \"mqBhuiixrkwypkjNHFwSNYiFEtAiDr54gp\"\n" +
    "  } ]\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/transactions/single/_description.html',
    "<h3>Retrieve a Transaction</h3>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>tx_hash: </td>\n" +
    "      <td><em>string</em> <span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>hash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>ver: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>lock_time: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>size: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>tx_id: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>vin_sz: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>in: </td>\n" +
    "      <td><p><em>array</em> of Input Objects</p>\n" +
    "        <table class='table table-bordered table-condensed table-docs'>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>prev_out:</td>\n" +
    "              <td>\n" +
    "                <table class='table table-bordered table-condensed table-docs'>\n" +
    "                  <tbody>\n" +
    "                    <tr>\n" +
    "                      <td>n</td>\n" +
    "                      <td><em>integer</em></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td>hash</td>\n" +
    "                      <td><em>string</em></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td>tx_id</td>\n" +
    "                      <td><em>integer</em></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td>value</td>\n" +
    "                      <td><em>integer</em></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td>address</td>\n" +
    "                      <td><em>string</em></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td>hash160</td>\n" +
    "                      <td><em>string</em></td>\n" +
    "                    </tr>\n" +
    "                  </tbody>\n" +
    "                </table>\n" +
    "              </td>\n" +
    "              <tr>\n" +
    "                <td>scriptSig</td>\n" +
    "                <td><em>string</em></td>\n" +
    "              </tr>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>out: </td>\n" +
    "      <td>\n" +
    "        <p><em>array</em> of Output Objects</p>\n" +
    "        <table class='table table-bordered table-condensed table-docs'>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>n</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>value</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>scriptPubKey</td>\n" +
    "              <td><em>string</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>spent</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>address</td>\n" +
    "              <td><em>string</em></td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/transactions/single/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/unspents/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/unspents/intro/_description.html',
    "<h2>Unspent Outputs</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "</p>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/unspents/intro/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/unspents/multiple/_curl.html',
    "<br><br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://api.helloblock.io/v1/addresses/unspents?addresses[]=<span class=\"text-primary\">&lt;address&gt;</span></code>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl -G https://api.helloblock.io/v1/addresses/unspents \\\n" +
    "   -d \"addresses[]=<span class='text-primary'>mfwyrZw47YY7wExpcLm7uPHLer7XoMVntd</span>\" \\\n" +
    "   -d \"addresses[]=<span class='text-primary'>n161eDouWrxaPPk6D3y4si3Kenz43yAAo8</span>\" \\\n" +
    "   -d \"addresses[]=<span class='text-primary'>mhdDvTC1wgTr6kEEs4wkDTSxwjuQzvN4md</span>\"\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST URL</div>\n" +
    "<pre>\n" +
    "  <code class=\"markdown\" hljs>\n" +
    "https://api.helloblock.io/v1/addresses/unspents?addresses[]=mfwyrZw47YY7wExpcLm7uPHLer7XoMVntd&addresses[]=n161eDouWrxaPPk6D3y4si3Kenz43yAAo8&addresses[]=mhdDvTC1wgTr6kEEs4wkDTSxwjuQzvN4md\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "[ {\n" +
    "  \"confirmations\": 32,\n" +
    "  \"block_height\": 155068,\n" +
    "  \"tx_hash\": \"7110f57720d45f751e5a796cf53f3e78c74dd93939933642f4c277d2cf524f9e\",\n" +
    "  \"tx_id\": 997365,\n" +
    "  \"n\": 1,\n" +
    "  \"scriptPubKey\": \"76a91404bbb3a6de41830289bb34a47133b0dbfcc3adc288ac\",\n" +
    "  \"value\": 2200000000,\n" +
    "  \"hash160\": \"04bbb3a6de41830289bb34a47133b0dbfcc3adc2\",\n" +
    "  \"address\": \"mfwyrZw47YY7wExpcLm7uPHLer7XoMVntd\"\n" +
    "}, {\n" +
    "  \"confirmations\": 32,\n" +
    "  \"block_height\": 155068,\n" +
    "  \"tx_hash\": \"dbd9a8fee45519c338b0b49656967066c873afabe3ab4c831ff5c9ce5cab4725\",\n" +
    "  \"tx_id\": 997374,\n" +
    "  \"n\": 0,\n" +
    "  \"scriptPubKey\": \"76a91404bbb3a6de41830289bb34a47133b0dbfcc3adc288ac\",\n" +
    "  \"value\": 2100000000,\n" +
    "  \"hash160\": \"04bbb3a6de41830289bb34a47133b0dbfcc3adc2\",\n" +
    "  \"address\": \"mfwyrZw47YY7wExpcLm7uPHLer7XoMVntd\"\n" +
    "}]\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/unspents/multiple/_description.html',
    "<h3>Retrieve Unspent Outputs for multiple Addresses</h3>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>addresses: </td>\n" +
    "      <td>\n" +
    "        <em>array</em> of <em>strings</em> <span class='label label-primary'>REQUIRED</span>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<p>Returns <em>array</em> of: </p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>confirmations: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>block_height: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>tx_hash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>tx_id: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>n: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>scriptPubKey: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>value: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>hash160: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>address: </td>\n" +
    "      <td><em>string</em> (base58)</td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/unspents/multiple/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/walkthrough/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/walkthrough/intro/_description.html',
    "<h2>Walkthrough</h2>\n" +
    "<br>\n" +
    "<code class=\"single\">\n" +
    "  https://api.helloblock.io/v1/\n" +
    "</code>\n" +
    "<br><br>\n" +
    "<p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "</p>\n" +
    "<br>\n" +
    "<p>\n" +
    "  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "</p>\n" +
    "\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/walkthrough/intro/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/explorer.html',
    "<br>\n" +
    "<div class=\"wide-container\">\n" +
    "  <form class=\"input-group input-group-lg\" ng-submit=\"submitRequest()\">\n" +
    "    <span class=\"input-group-addon h3\">REQUEST URL: </span>\n" +
    "    <input\n" +
    "      type=\"text\"\n" +
    "      class=\"form-control no-white-space no-outline\"\n" +
    "      ng-model=\"request.url\"\n" +
    "      selected>\n" +
    "    </input>\n" +
    "    <button ng-hide=\"true\" type=\"submit\"></button>\n" +
    "  </form>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <h3>REQUEST BUILDER</h3>\n" +
    "      <form class=\"bs-sidebar extra-padding\" ng-submit=\"submitRequest()\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-3\">\n" +
    "            <div class='h5 title-key'>\n" +
    "              <strong>MODE:</strong>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-9\">\n" +
    "            <select ui-select2=\"select2Options\" ng-model=\"options.selected.mode\">\n" +
    "              <option value=\"api\">LIVE</option>\n" +
    "              <option value=\"test\">TEST</option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-3\">\n" +
    "            <div class='h5 title-key'>\n" +
    "              <strong>RESOURCE:</strong>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-9\">\n" +
    "            <select ui-select2=\"select2Options\" ng-model=\"options.selected.index\n" +
    "            \">\n" +
    "              <option ng-repeat=\"def in options.definitions\" value=\"{{$index}}\">\n" +
    "                {{def.definition}}\n" +
    "              </option>\n" +
    "            </select>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"row\">\n" +
    "          <div class='h5 text-center title-params'>\n" +
    "            <strong>\n" +
    "              <span>PARAMETERS</span>\n" +
    "            </strong>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"line-divider\"></div>\n" +
    "        <br>\n" +
    "\n" +
    "        <div ng-repeat=\"def in options.definitions\">\n" +
    "          <div ng-show=\"options.selected.index === $index.toString()\">\n" +
    "            <div class=\"row\" ng-repeat=\"param in def.parameters\">\n" +
    "              <div class=\"col-md-3 text-right\">\n" +
    "                <h5>{{param.key.capitalize()}}:</h5>\n" +
    "              </div>\n" +
    "              <div class=\"col-md-9\">\n" +
    "                <input class='form-control' ng-model=\"param.value\">\n" +
    "              </div>\n" +
    "              <br><br>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <button\n" +
    "          class=\"btn btn-block btn-success\"\n" +
    "          type=\"submit\"\n" +
    "          >\n" +
    "          SUBMIT REQUEST\n" +
    "        </button>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "    <div class=\"col-md-8\">\n" +
    "      <h3>RESPONSE</h3>\n" +
    "      <spin ng-show=\"response.loading\"></spin>\n" +
    "      <pre class=\"response\">\n" +
    "        <code class='loose'>\n" +
    "RESPONSE CODE: <span class='text-{{response.css}}'>{{response.code}}</span>\n" +
    "        </code>\n" +
    "        <code class=\"javascript\" ng-hljs>\n" +
    "        </code>\n" +
    "    </pre>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/landing.html',
    "<div id=\"landing\">\n" +
    "  <div class=\"centerpiece\">\n" +
    "    <div class=\"container\">\n" +
    "      <br><br><br>\n" +
    "      <h1 class='main-title text-center white'>\n" +
    "        <strong>Stop writing tests using real coins</strong>\n" +
    "      </h1>\n" +
    "      <br>\n" +
    "      <h2 class='text-center white'>\n" +
    "        Get started with the testnet blockchain API\n" +
    "      </h2>\n" +
    "      <br><br><br>\n" +
    "      <div class=\"row text-center\">\n" +
    "        <a class=\"btn btn-success btn-lg\" href=\"/#!/docs/\">\n" +
    "          <!-- TODO: should be explorer -->\n" +
    "          Go to Docs\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"feature col-md-4 text-center\">\n" +
    "        <br>\n" +
    "        <i class=\"fa fa-copy fa-4x\"></i>\n" +
    "        <h2>\n" +
    "          Mirrors Blockchain.info\n" +
    "        </h2>\n" +
    "        <p class='lead lead-smaller'>\n" +
    "          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"feature col-md-4 text-center\">\n" +
    "        <br>\n" +
    "        <i class=\"fa fa-wrench fa-4x\"></i>\n" +
    "        <h2>\n" +
    "          Built for Developers\n" +
    "        </h2>\n" +
    "        <p class='lead lead-smaller'>\n" +
    "          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"feature col-md-4 text-center\">\n" +
    "        <br>\n" +
    "        <i class=\"fa fa-btc fa-4x\"></i>\n" +
    "        <h2>\n" +
    "          Testnet3 Support\n" +
    "        </h2>\n" +
    "        <p class='lead lead-smaller'>\n" +
    "          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <br><br>\n" +
    "    <div class=\"row\">\n" +
    "      <h1 class='text-center'>Quick Start</h1>\n" +
    "      <div class=\"col-md-8 col-md-offset-2\">\n" +
    "        <blockquote>\n" +
    "          <p class=\"lead\">\n" +
    "            If you're using the Blockchain.info API would like testnet support,\n" +
    "            substituted your base URL as follows:\n" +
    "          </p>\n" +
    "        </blockquote>\n" +
    "        <h2>\n" +
    "          <code class=\"single\">https://blockchain.info/</code>\n" +
    "        </h2>\n" +
    "        <h2>\n" +
    "          <code class=\"single\">https://test.helloblock.io/b/</code>\n" +
    "        </h2>\n" +
    "\n" +
    "        <blockquote>\n" +
    "          <p class=\"lead\">\n" +
    "            This mirrors the endpoints specified in https://blockchain.info/api/blockchain_api (including pushtx) but uses testnet3\n" +
    "          </p>\n" +
    "          <p class=\"lead\">\n" +
    "            Use our API explorer to see for yourself\n" +
    "          </p>\n" +
    "        </blockquote>\n" +
    "        <div class=\"row\">\n" +
    "          <p>For example:</p>\n" +
    "          <pre>\n" +
    "            <code class=\"ruby\" hljs>\n" +
    "              class Thing\n" +
    "                def initialize\n" +
    "                end\n" +
    "              end\n" +
    "            </code>\n" +
    "          </pre>\n" +
    "        </div>\n" +
    "        <blockquote>\n" +
    "          <p class=\"lead\">\n" +
    "            Use Us\n" +
    "          </p>\n" +
    "        </blockquote>\n" +
    "        <h2>\n" +
    "          <code class=\"single\">https://test.helloblock.io/v1/</code>\n" +
    "        </h2>\n" +
    "        <br>\n" +
    "        <div class=\"row text-center\">\n" +
    "          <a class=\"btn btn-success btn-lg\" href=\"/#!/docs/\">\n" +
    "            <!-- TODO: should be explorer -->\n" +
    "            Go to Docs\n" +
    "          </a>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "<br><br><br><br><br><br>\n"
  );


  $templateCache.put('/templates/test.html',
    "<br><br><br>\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"col-md-4\">\n" +
    "    <select ui-select2 ng-model=\"select2\" data-placeholder=\"Pick a number\">\n" +
    "      <option value=\"\"></option>\n" +
    "      <option value=\"one\">First</option>\n" +
    "      <option value=\"two\">Second</option>\n" +
    "      <option value=\"three\">Third</option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<br><br><br>\n"
  );

}]);
