angular.module('hbApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/404.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>The page you were looking for doesn't exist (404)</title>\n" +
    "  <style>\n" +
    "  body {\n" +
    "    /*background-color: #EFEFEF;*/\n" +
    "    /*color: #2E2F30;*/\n" +
    "    text-align: center;\n" +
    "    /*font-family: arial, sans-serif;*/\n" +
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
    "    /*background-color: #F7F7F7;*/\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-bottom-color: #999;\n" +
    "    border-bottom-left-radius: 4px;\n" +
    "    border-bottom-right-radius: 4px;\n" +
    "    border-top-color: #DADADA;\n" +
    "    /*color: #666;*/\n" +
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


  $templateCache.put('/templates/blockExplorer/_full_tx.html',
    "<br>\n" +
    "<div class=\"h1 text-center\">\n" +
    "  TRANSACTION:\n" +
    "</div>\n" +
    "<br>\n" +
    "<waitspin ng-show=\"!transaction.txHash\"></waitspin>\n" +
    "<div class=\"container\" ng-show=\"transaction.txHash\">\n" +
    "  <div class=\"h3 text-center text-gray\">\n" +
    "    SUMMARY\n" +
    "  </div>\n" +
    "  <span class=\"pull-right view-json\">\n" +
    "    <a href='https://{{global.mode}}.helloblock.io/v1/transactions/{{transaction.txHash}}'>View as JSON</a>\n" +
    "  </span>\n" +
    "  <br>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-12 table-tight\">\n" +
    "      <table class=\"table table-bordered table-summary table-overview\">\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>Transaction Hash: </td>\n" +
    "            <td>\n" +
    "              <clipboard clip-copy=\"{{transaction.txHash}}\"></clipboard>\n" +
    "              <span>{{transaction.txHash}}</span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Block Hash: </td>\n" +
    "            <td>\n" +
    "              <clipboard clip-copy=\"{{transaction.blockHash}}\"></clipboard>\n" +
    "              <span>{{transaction.blockHash}}</span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <table class=\"table table-bordered table-summary\">\n" +
    "      <tr>\n" +
    "        <td>Block Height: </td>\n" +
    "        <td><a href=\"/{{global.mode}}/blocks/{{transaction.blockHeight}}\">{{transaction.blockHeight}}</a></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Received Time: </td>\n" +
    "        <td utc=\"{{transaction.estimatedTxTime}}\"></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Confirmations: </td>\n" +
    "        <td>\n" +
    "          <span class=\"label\" verbose=\"true\" confirmations=\"{{transaction.confirmations}}\"></span>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Size: </td>\n" +
    "        <td>{{transaction.size}} Bytes</td>\n" +
    "      </tr>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <table class=\"table table-bordered table-summary\">\n" +
    "      <tr>\n" +
    "        <td>Total Inputs: </td>\n" +
    "        <td to-btc=\"{{transaction.totalInputsValue}}\"></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Total Outputs: </td>\n" +
    "        <td to-btc=\"{{transaction.totalOutputsValue}}\"></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Fees: </td>\n" +
    "        <td to-btc=\"{{transaction.fees}}\"></td>\n" +
    "      </tr>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<br><br>\n" +
    "<div class=\"wide-container\">\n" +
    "  <div class=\"h3 text-center text-gray\">\n" +
    "    INPUTS/OUTPUTS\n" +
    "  </div>\n" +
    "  <table class=\"table table-transactions table-transactions-lg\">\n" +
    "    <tr>\n" +
    "      <td class='no-top'>\n" +
    "        <br>\n" +
    "        <div class=\"col-md-6\">\n" +
    "          <div class=\"text-center\" ng-show=\"transaction.inputs[0].txHash === null\">\n" +
    "            <br>\n" +
    "            <span class=\"h3\">NEWLY GENERATED COINS</span>\n" +
    "          </div>\n" +
    "          <table\n" +
    "          ng-repeat=\"i in transaction.inputs\"\n" +
    "          ng-show=\"i.txHash !== null\"\n" +
    "          class=\"\n" +
    "          table table-bordered table-io\"\n" +
    "          >\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>Address: </td>\n" +
    "              <td>\n" +
    "                <clipboard clip-copy=\"{{i.address}}\"></clipboard>\n" +
    "                <img\n" +
    "                ng-src=\"https://secure.gravatar.com/avatar/{{i.hash160}}?d=identicon&s=16\"\n" +
    "                width=\"16\">\n" +
    "                <span><a href=\"/{{global.mode}}/addresses/{{i.address}}\">{{i.address}}</a></span>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "                Amount:\n" +
    "              </td>\n" +
    "              <td>\n" +
    "                <span class=\"label label-default\">SPENT</span>\n" +
    "                <span class=\"amount\" to-btc=\"{{i.value}}\"></span>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>n (index): </td>\n" +
    "              <td>\n" +
    "                <span>\n" +
    "                  <a href=\"/{{global.mode}}/transactions/{{i.txHash}}?n={{i.index}}\">\n" +
    "                    {{i.index}}\n" +
    "                  </a>\n" +
    "                </span>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "                TX Hash:\n" +
    "              </td>\n" +
    "              <td class=''>\n" +
    "                <span class=\"amount\">\n" +
    "                  <clipboard clip-copy=\"{{i.txHash}}\"></clipboard>\n" +
    "                  <a href=\"/{{global.mode}}/transactions/{{i.txHash}}?n={{i.index}}\">\n" +
    "                    {{i.txHash}}\n" +
    "                  </a>\n" +
    "                </span>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td class='text-center'>ScriptSig: </td>\n" +
    "              <td class='break'>\n" +
    "                <clipboard clip-copy=\"{{i.scriptSig}}\"></clipboard>\n" +
    "                <span>{{i.scriptSig}}</span>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-1 text-center\">\n" +
    "        <br>\n" +
    "        <i class=\"fa fa-arrow-circle-right fa-4x text-gray-light\"></i>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-5 addresses\">\n" +
    "        <table\n" +
    "        ng-repeat=\"o in transaction.outputs\"\n" +
    "        class=\"table table-bordered table-io\"\n" +
    "        ng-class=\"{'table-highlighted': transaction.index === o.index}\">\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>n (index): </td>\n" +
    "            <td><span>{{o.index}}</span></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Address: </td>\n" +
    "            <td>\n" +
    "              <clipboard clip-copy=\"{{o.address}}\"></clipboard>\n" +
    "              <img src=\"https://secure.gravatar.com/avatar/{{o.hash160}}?d=identicon&s=16\" width=\"16\">\n" +
    "              <span><a href=\"/{{global.mode}}/addresses/{{o.address}}\">{{o.address}}</a></span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              Amount:\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              <span class=\"label\" spent=\"{{o.spent}}\"></span>\n" +
    "              <span class=\"amount\" to-btc=\"{{o.value}}\"></span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td rowspan=\"1\">scriptPubKey: </td>\n" +
    "            <td class=\"break\">\n" +
    "              <clipboard clip-copy=\"{{o.scriptPubKey}}\"></clipboard>\n" +
    "              <span>\n" +
    "                {{o.scriptPubKey}}\n" +
    "              </span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <!-- <tr>\n" +
    "            <td>\n" +
    "              <span>\n" +
    "                TODO: Parsed\n" +
    "              </span>\n" +
    "            </td>\n" +
    "          </tr> -->\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </td>\n" +
    "</tr>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/blockExplorer/_tx.html',
    "<table class=\"table table-striped table-transactions\">\n" +
    "  <tr>\n" +
    "    <td class=\"text-center\">\n" +
    "      <span class=\"h5 pull-left unselectable\">\n" +
    "        TX HASH:\n" +
    "      </span>\n" +
    "      <span class='h5 pull-left'>\n" +
    "        <clipboard clip-copy=\"{{tx.txHash}}\"></clipboard>\n" +
    "        <a href=\"/{{global.mode}}/transactions/{{tx.txHash}}\"> {{tx.txHash}}</a>\n" +
    "      </span>\n" +
    "      <span class=\"pull-right\">\n" +
    "        <span class=\"label label-lg\" confirmations=\"{{tx.confirmations}}\"></span>\n" +
    "        <span class=\"label label-lg label-default amount\" utc=\"{{tx.estimatedTxTime}}\"></span>\n" +
    "        <span class=\"label label-lg label-success amount\" to-btc=\"{{tx.estimatedTxValue}}\"></span>\n" +
    "      </span>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "  <tr>\n" +
    "    <td>\n" +
    "    <br>\n" +
    "    <div class=\"col-md-5\">\n" +
    "      <div class=\"text-center\" ng-show=\"tx.inputs[0].hash160 === null\">\n" +
    "        <br>\n" +
    "        <span class=\"h3\">NEWLY GENERATED COINS</span>\n" +
    "      </div>\n" +
    "      <table\n" +
    "        class=\"table table-bordered\"\n" +
    "        ng-repeat=\"i in tx.inputs\"\n" +
    "        ng-show=\"i.hash160 !== null\"\n" +
    "        >\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td rowspan=\"2\" class='text-center n-index'>\n" +
    "              <a href=\"/{{global.mode}}/transactions/{{i.txHash}}?n={{i.index}}\">\n" +
    "                n: {{i.index}}\n" +
    "              </a>\n" +
    "            </td>\n" +
    "            <td rowspan=\"2\" class='text-center'>\n" +
    "              <img ng-src=\"https://secure.gravatar.com/avatar/{{i.hash160}}?d=identicon&s=48\" width=\"48\">\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              <span class=\"h6\">\n" +
    "                <clipboard clip-copy=\"{{i.address}}\"></clipboard>\n" +
    "                <a href=\"/{{global.mode}}/addresses/{{i.address}}\">{{i.address}}</a>\n" +
    "              </span>\n" +
    "              </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <span class=\"label label-default\">SPENT</span>\n" +
    "              <span class=\"h6 amount\" to-btc=\"{{i.value}}\"></span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-2 text-center\">\n" +
    "      <br>\n" +
    "      <span class=\"text-gray-light\" direction=\"{{tx.estimatedTxDirection}}\">\n" +
    "        <i class=\"fa fa-arrow-circle-right fa-4x\"></i>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-5 addresses\">\n" +
    "      <div class=\"text-center\" ng-show=\"tx.outputs[0].address === null\">\n" +
    "        <br>\n" +
    "        <span class=\"h3\">STRANGE OUTPUT</span>\n" +
    "      </div>\n" +
    "      <table\n" +
    "        ng-repeat=\"o in tx.outputs\"\n" +
    "        class=\"table table-bordered\"\n" +
    "        ng-show=\"tx.outputs[0].address !== null\"\n" +
    "        >\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td rowspan=\"2\" class='text-center n-index'>\n" +
    "              n: {{o.index}}\n" +
    "            </td>\n" +
    "            <td rowspan=\"2\" class='text-center'>\n" +
    "              <img ng-src=\"https://secure.gravatar.com/avatar/{{o.hash160}}?d=identicon&s=48\" width=\"48\">\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              <span class=\"h6\">\n" +
    "                <clipboard clip-copy=\"{{o.address}}\"></clipboard>\n" +
    "                <a href=\"/{{global.mode}}/addresses/{{o.address}}\">{{o.address}}</a>\n" +
    "              </span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              <span class=\"label\" spent=\"{{o.spent}}\"></span>\n" +
    "              <span class=\"h6 amount\" to-btc=\"{{o.value}}\"></span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    </td>\n" +
    "  </tr>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/blockExplorer/addresses.html',
    "<subnav selected=\"'addresses'\" global=\"global\"></subnav>\n" +
    "<div class=\"centerpiece-alt text-center\">\n" +
    "  <div class='h1 white'>{{global.mode.toUpperCase()}}</div>\n" +
    "  <br>\n" +
    "  <div class=\"container\">\n" +
    "    <form ng-submit=\"bigSearch.query(address.base58)\">\n" +
    "      <div class=\"input-group\">\n" +
    "          <input\n" +
    "            class='h3 big-input'\n" +
    "            spellcheck=\"false\"\n" +
    "            name=\"query\"\n" +
    "            ng-model=\"address.base58\"\n" +
    "            >\n" +
    "          <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-success btn-block btn-search\">\n" +
    "              <span class=\"h2\">SEARCH</span>\n" +
    "            </button>\n" +
    "          </span>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "  <br>\n" +
    "  <div class=\"h1 text-center\">\n" +
    "    ADDRESS:\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"container\">\n" +
    "      <span class=\"pull-right\">\n" +
    "        <a href='https://{{global.mode}}.helloblock.io/v1/addresses/{{address.base58}}'>View as JSON</a>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "    <waitspin ng-show=\"!address.hash160\"></waitspin>\n" +
    "    <div class=\"col-md-4 text-center\">\n" +
    "      <img src=\"https://secure.gravatar.com/avatar/{{address.hash160}}?d=identicon&s=220\" height=\"220\" class='address-identicoin' ng-show=\"address.hash160\">\n" +
    "    </div>\n" +
    "    <div class=\"col-md-8\">\n" +
    "      <table class=\"table table-bordered table-address\" ng-show=\"address.hash160\">\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td><strong>Base58</strong></td>\n" +
    "            <td bind-once>\n" +
    "              <clipboard clip-copy=\"{{address.base58}}\"></clipboard>\n" +
    "              <a bind-once href=\"/{{global.mode}}/addresses/{{address.base58}}\">\n" +
    "                {{address.base58}}\n" +
    "              </a>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><strong>Hash160</strong></td>\n" +
    "            <td>\n" +
    "              <clipboard clip-copy=\"{{address.hash160}}\"></clipboard>\n" +
    "              <span>\n" +
    "                {{address.hash160}}\n" +
    "              </span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><strong># Transactions</strong></td>\n" +
    "            <td>{{address.transactionsCount}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><strong># Total Sent</strong></td>\n" +
    "            <td>{{address.totalSentCount}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><strong># Total Received</strong></td>\n" +
    "            <td>{{address.totalReceivedCount}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><strong>Total Sent Amount</strong></td>\n" +
    "            <td watch='true' to-btc=\"{{address.totalSentValue}}\"></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><strong>Total Received Amount</strong></td>\n" +
    "            <td watch='true' to-btc=\"{{address.totalReceivedValue}}\"></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><strong>Final Balance Amount</strong></td>\n" +
    "            <td watch='true' to-btc=\"{{address.balance}}\"></td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br><br><br><br>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "  <tabset>\n" +
    "    <tab heading=\"All Transactions\">\n" +
    "      <br>\n" +
    "      <div infinite-scroll=\"loadMoreTransactions()\">\n" +
    "        <span ng-repeat=\"tx in address.transactions\">\n" +
    "          <div ng-include=\"'/templates/blockExplorer/_tx.html'\"></div>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "\n" +
    "    </tab>\n" +
    "    <tab heading=\"Unspent Outputs\">\n" +
    "      <br>\n" +
    "      <div infinite-scroll=\"loadMoreUnspents()\">\n" +
    "        <span ng-repeat=\"tx in address.unspents\">\n" +
    "          <div ng-include=\"'/templates/blockExplorer/_tx.html'\"></div>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </tab>\n" +
    "  </tabset>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"col-md-8 col-md-offset-1\">\n" +
    "  <waitspin ng-show=\"fetching\"></waitspin>\n" +
    "</div>\n" +
    "<div class=\"space-big\"></div>\n" +
    "<div class=\"space-big\"></div>\n"
  );


  $templateCache.put('/templates/blockExplorer/blocks.html',
    "<subnav selected=\"'blocks'\" global=\"global\"></subnav>\n" +
    "<div class=\"centerpiece-alt text-center\">\n" +
    "  <div class='h1 white'>{{global.mode.toUpperCase()}}</div>\n" +
    "  <br>\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <a\n" +
    "        href=\"/{{global.mode}}/blocks/{{block.index - 1}}\"\n" +
    "        class=\"btn btn-default btn-block btn-hover\">\n" +
    "        <span class='h3'>PREVIOUS</span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <form ng-submit=\"bigSearch.query(block.index)\">\n" +
    "        <input class='h2 big-input' spellcheck=\"false\" ng-model=\"block.index\">\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <a\n" +
    "        href=\"/{{global.mode}}/blocks/{{block.index + 1}}\"\n" +
    "        class=\"btn btn-default btn-block btn-hover\">\n" +
    "        <span class='h3'>NEXT</span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"h1 text-center\">\n" +
    "    BLOCK:\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"h3 text-center text-gray\">\n" +
    "    SUMMARY:\n" +
    "  </div>\n" +
    "  <waitspin ng-show=\"!block.blockHeight\"></waitspin>\n" +
    "  <div class=\"col-md-10 col-md-offset-1\">\n" +
    "    <span class=\"pull-right view-json\">\n" +
    "      <a href='https://{{global.mode}}.helloblock.io/v1/blocks/{{block.index}}'>View as JSON</a>\n" +
    "    </span>\n" +
    "    <br>\n" +
    "    <table\n" +
    "      ng-show=\"block.blockHeight\"\n" +
    "      class=\"table table-bordered table-summary\">\n" +
    "      <tr>\n" +
    "        <td>Block Height: </td>\n" +
    "        <td>{{block.blockHeight}}</td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Block Hash: </td>\n" +
    "        <td>\n" +
    "          <div>\n" +
    "            <clipboard clip-copy=\"{{block.blockHash}}\"></clipboard>\n" +
    "            <span>{{block.blockHash}}</span>\n" +
    "          </div>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Block Time: </td>\n" +
    "        <td utc=\"{{block.blockTime}}\"></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Block Bits: </td>\n" +
    "        <td>{{block.bits}}</td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Confirmations: </td>\n" +
    "        <td>\n" +
    "          <span class=\"label\" verbose=\"true\" confirmations=\"{{block.confirmations}}\"></span>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Merkle Root: </td>\n" +
    "        <td>\n" +
    "          <clipboard clip-copy=\"{{block.merkleRootHash}}\"></clipboard>\n" +
    "          <span>{{block.merkleRootHash}}</span>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Nonce: </td>\n" +
    "        <td>{{block.nonce}}</td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td># Transactions: </td>\n" +
    "        <td>{{block.transactionsCount}}</td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Total Inputs: </td>\n" +
    "        <td to-btc=\"{{block.totalInputsValue}}\"></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Total Outputs: </td>\n" +
    "        <td to-btc=\"{{block.totalOutputsValue}}\"></td>\n" +
    "      </tr>\n" +
    "    </table>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "<br><br><br>\n" +
    "<div class=\"container\" ng-show=\"block.transactions.length > 0\">\n" +
    "  <div class=\"h3 text-center text-gray\">\n" +
    "    TRANSACTIONS:\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div infinite-scroll=\"loadMoreTransactions()\">\n" +
    "    <span ng-repeat=\"tx in block.transactions| limitTo:limitTo.transactions\">\n" +
    "      <div ng-include=\"'/templates/blockExplorer/_tx.html'\"></div>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/blockExplorer/home.html',
    "<subnav selected=\"'latest'\" global=\"global\"></subnav>\n" +
    "<!-- <br><br><br><br> -->\n" +
    "<div class=\"centerpiece-alt\">\n" +
    "  <div class='h1 text-center white'>{{global.mode.toUpperCase()}}</div>\n" +
    "  <br>\n" +
    "  <form ng-submit=\"bigSearch.query(query)\">\n" +
    "    <div class=\"container\">\n" +
    "      <div ng-show=\"hasError()\">\n" +
    "        <div class=\"alert alert-danger alert-danger-light text-center\">\n" +
    "          <a class=\"close\" data-dismiss=\"alert\" href=\"#\" aria-hidden=\"true\">&times;</a>\n" +
    "          <span class=\"h4\">\n" +
    "            Please ensure your query is a valid address, transaction hash or block height/hash\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input\n" +
    "          class='h3 big-input'\n" +
    "          spellcheck=\"false\"\n" +
    "          ng-model=\"query\"\n" +
    "          placeholder=\"Search for any address, transaction hash or block height\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-success btn-block btn-search\">\n" +
    "            <span class=\"h2\">SEARCH</span>\n" +
    "          </button>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<!-- <div class=\"container container-stats\">\n" +
    "  <div class=\"row stats\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <span class=\"label label-info\">Nodes Connected:</span>\n" +
    "      <span class='h6'>12424</span>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <span class=\"label label-info\">Difficulty:</span>\n" +
    "      <span class='h6'>1</span>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <span class=\"label label-info\"># Total Transactions:</span>\n" +
    "      <span class='h6'>42,425,630</span>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <span class=\"label label-info\"># Total Addresses:</span>\n" +
    "      <span class='h6'>1,535,733</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div> -->\n" +
    "<br><br>\n" +
    "<div class=\"wide-container row\">\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div class=\"h3 text-gray text-center\">Latest Blocks</div>\n" +
    "    <br>\n" +
    "    <waitspin ng-show=\"blocks.latest.length === 0\" left='250'></waitspin>\n" +
    "    <table class=\"table table-latest\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th class='text-center'><span class='h5'>Block Height</span></th>\n" +
    "          <th class='text-center'><span class='h5'># Transactions</span></th>\n" +
    "          <th class='text-center'><span class='h5 nowrap'>Total Output Value</span></th>\n" +
    "          <th class='text-center'><span class='h5'>Time</span></th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr ng-repeat=\"block in blocks.latest\">\n" +
    "          <td class='text-center'>\n" +
    "            <a href=\"/{{global.mode}}/blocks/{{block.blockHeight}}\">{{block.blockHeight}}</a>\n" +
    "          </td>\n" +
    "          <td class='text-center'>\n" +
    "            <span class='h6'>{{block.transactionsCount}}</span>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <span class=\"label label-success amount label-lg\">\n" +
    "              <span to-btc=\"{{block.totalOutputsValue}}\"></span>\n" +
    "            </span>\n" +
    "\n" +
    "          </td>\n" +
    "          <td class='text-center'>\n" +
    "            <span class='h6' live='true' timeago=\"{{block.blockTime}}\"></span>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div class=\"h3 text-gray text-center\">Latest Transactions</div>\n" +
    "    <br>\n" +
    "    <waitspin ng-show=\"transactions.latest.length === 0\" left='250'></waitspin>\n" +
    "    <table class=\"table table-latest\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th class='text-center'><span class='h5'>Transaction Hash</span></th>\n" +
    "          <th class='text-center'><span class='h5'>Time</span></th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr ng-repeat=\"tx in transactions.latest\">\n" +
    "          <td>\n" +
    "            <clipboard clip-copy=\"{{tx.txHash}}\"></clipboard>\n" +
    "            <a href=\"/{{global.mode}}/transactions/{{tx.txHash}}\">{{tx.txHash}}</a>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <span class='h6 nowrap' live='true' timeago=\"{{tx.estimatedTxTime}}\"></span>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"space\"></div>\n"
  );


  $templateCache.put('/templates/blockExplorer/propagate.html',
    "<subnav selected=\"'propagate'\" global=\"global\"></subnav>\n" +
    "<div class=\"centerpiece-alt text-center\">\n" +
    "  <div class=\"container heading\">\n" +
    "    <div class=\"h1 text-center white\">\n" +
    "        PROPAGATE/DECODE TRANSACTIONS [{{global.mode.toUpperCase()}}]\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "<div class=\"container\">\n" +
    "  <form>\n" +
    "    <div>\n" +
    "      <textarea\n" +
    "        class='big-input big-input-hex h4'\n" +
    "        spellcheck=\"false\"\n" +
    "        rows='5'\n" +
    "        ng-model=\"rawTransaction.rawTxHex\"\n" +
    "        placeholder=\"Copy/paste a raw transaction hex here ...\"\n" +
    "        selected></textarea>\n" +
    "    </div>\n" +
    "    <div class=\"pull-right\">\n" +
    "      <button class='btn btn-warning' ng-click=\"decodeHex()\">\n" +
    "        DECODE\n" +
    "      </button>\n" +
    "      <button class='btn btn-danger' ng-click=\"propagateHex()\">\n" +
    "        PROPAGATE\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  <div class=\"space\"></div>\n" +
    "</div>\n" +
    "<br>\n" +
    "<div class=\"transaction-decoded\">\n" +
    "  <div class=\"container\">\n" +
    "    <span ng-repeat=\"alert in alertsArray\">\n" +
    "      <div class=\"alert {{alert.css}} text-center\" fade-timeout='{{alert.fade}}'>\n" +
    "        <a class=\"close\" data-dismiss=\"alert\" href=\"#\" aria-hidden=\"true\">&times;</a>\n" +
    "        <span class=\"h4\">\n" +
    "          {{alert.message}}\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <waitspin left=\"620%\" ng-if=\"sending\"></waitspin>\n" +
    "  <div ng-show=\"!!transaction && !sending\">\n" +
    "    {{transaction}}\n" +
    "    <div ng-include=\"'/templates/blockExplorer/_full_tx.html'\"></div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/blockExplorer/test.html',
    "<subnav></subnav>\n" +
    "{{global}}\n"
  );


  $templateCache.put('/templates/blockExplorer/transactions.html',
    "<subnav selected=\"'transactions'\" global=\"global\"></subnav>\n" +
    "<div class=\"centerpiece-alt text-center\">\n" +
    "  <div class='h1 white'>{{global.mode.toUpperCase()}}</div>\n" +
    "  <br>\n" +
    "  <div class=\"container\">\n" +
    "    <form ng-submit=\"bigSearch.query(transaction.txHash)\">\n" +
    "      <div class=\"input-group\">\n" +
    "          <input\n" +
    "            class='h3 big-input'\n" +
    "            spellcheck=\"false\"\n" +
    "            name=\"query\"\n" +
    "            ng-model=\"transaction.txHash\"\n" +
    "            >\n" +
    "          <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-success btn-block btn-search\">\n" +
    "              <span class=\"h2\">SEARCH</span>\n" +
    "            </button>\n" +
    "          </span>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div ng-include=\"'/templates/blockExplorer/_full_tx.html'\"></div>\n"
  );


  $templateCache.put('/templates/blockExplorer/unconfirmed.html',
    "<subnav selected=\"'unconfirmed'\" global=\"global\"></subnav>\n" +
    "<div class=\"centerpiece-alt text-center\">\n" +
    "  <div class=\"container\">\n" +
    "    <br>\n" +
    "    <div class=\"h1 text-center white\">\n" +
    "        UNCONFIRMED TRANSACTIONS\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "  <waitspin ng-show=\"transactions.unconfirmed.length === 0\"></waitspin>\n" +
    "  <br>\n" +
    "  <div infinite-scroll=\"loadMoreTransactions()\">\n" +
    "    <span ng-repeat=\"tx in transactions.unconfirmed | limitTo:limitTo.unconfirmed\">\n" +
    "      <div ng-include=\"'/templates/blockExplorer/_tx.html'\"></div>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/components/_docnav.html',
    "<div class=\"navbar navbar-inverse navbar-subnav\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li class='no-left' ng-class=\"{'active': selected == 'tutorial'}\">\n" +
    "          <a href=\"/docs/tutorials/\">\n" +
    "            <i class=\"fa fa-info-circle\"></i>\n" +
    "            Tutorials\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li class='no-left' ng-class=\"{'active': selected == 'reference'}\">\n" +
    "          <a href=\"/docs/ref/\">\n" +
    "            <i class=\"fa fa-book\"></i>\n" +
    "            Reference\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <!-- <li class='no-left' ng-class=\"{'active': selected == 'explorer'}\">\n" +
    "          <a href=\"/docs/explorer/\">\n" +
    "            <i class=\"fa fa-search\"></i>\n" +
    "            API Explorer\n" +
    "          </a>\n" +
    "        </li> -->\n" +
    "        <!-- <li class='no-left' ng-class=\"{'active': selected == 'latest'}\">\n" +
    "          <a href=\"/docs/tutorials/\">\n" +
    "            Sample Apps\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li class='no-left' ng-class=\"{'active': selected == 'latest'}\">\n" +
    "          <a href=\"/docs/tutorials/\">\n" +
    "            CoinCasts\n" +
    "          </a>\n" +
    "        </li> -->\n" +
    "        <li class='no-left'>\n" +
    "          <a href=\"https://github.com/helloblock\" target=\"_blank\">\n" +
    "            <i class=\"fa fa-code\"></i>\n" +
    "            Source Code\n" +
    "          </a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.nav-collapse -->\n" +
    "  </div>\n" +
    "</div>\n"
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
    "      <a class=\"navbar-brand\" href=\"/\">\n" +
    "        <span ng-non-bindable>\n" +
    "          Hello, block! [BETA]\n" +
    "        </span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li ng-class=\"{'active': global.isOnLink('docs')}\">\n" +
    "          <a href=\"/docs\">\n" +
    "            <i class=\"fa fa-book\"></i>\n" +
    "            <span>Documentation</span>\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': global.isOnLink('testnet')}\">\n" +
    "          <a href=\"/testnet\">\n" +
    "            <i class=\"fa fa-bars\"></i>\n" +
    "            <span>Block Explorer</span>\n" +
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
    "      <a href=\"/docs/ref#{{s.name}}\">{{s.name.capitalize()}}</a>\n" +
    "      <ul class=\"nav\">\n" +
    "        <li ng-repeat=\"sub in s.subs.slice(1)\" spy=\"{{sub.id}}\">\n" +
    "          <span class='sub'>\n" +
    "            <a href=\"//docs#{{sub.id}}\">{{sub.name.capitalize()}}</a>\n" +
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
    "      <a href=\"/docs/ref#{{s.name}}\">{{s.name.capitalize()}}</a>\n" +
    "      <ul class=\"nav\">\n" +
    "        <li ng-repeat=\"sub in s.subs.slice(1)\" spy=\"{{sub.id}}\">\n" +
    "          <span class='sub'>\n" +
    "            <a href=\"//docs#{{sub.id}}\">{{sub.name.capitalize()}}</a>\n" +
    "          </span>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/components/_subnav.html',
    "<div class=\"navbar navbar-inverse navbar-subnav\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n" +
    "      <ul class=\"nav navbar-nav navbar-left\">\n" +
    "        <li class=\"dropdown dropdown-small no-left active\">\n" +
    "          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            {{global.mode.toUpperCase()}} <b class=\"caret\"></b>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li>\n" +
    "              <a href=\"#\" ng-click=\"global.setMode('testnet')\">TESTNET</a>\n" +
    "            </li>\n" +
    "            <div class=\"divider\"></div>\n" +
    "            <li>\n" +
    "              <a href=\"#\" ng-click=\"global.setMode('mainnet')\">MAINNET</a>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <a href=\"\" class='no-highlight sound'\n" +
    "          ng-click=\"global.toggleSound()\">\n" +
    "            <span class='text-success' ng-show=\"global.sound === 1\">\n" +
    "              <i class=\"fa fa-volume-up\"></i>\n" +
    "            </span>\n" +
    "            <span class=\"text-default-force\" ng-show=\"global.sound === 2\">\n" +
    "              <i class=\"fa fa-volume-off\"></i>\n" +
    "            </span>\n" +
    "          </a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li class='no-left' ng-class=\"{'active': selected == 'latest'}\">\n" +
    "          <a href=\"/{{global.mode}}/\">\n" +
    "            Latest\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': selected == 'addresses'}\">\n" +
    "          <a href=\"/{{global.mode}}/addresses\">\n" +
    "            Addresses\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': selected == 'transactions'}\">\n" +
    "          <a href=\"/{{global.mode}}/transactions\">\n" +
    "            Transactions\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': selected == 'blocks'}\">\n" +
    "          <a href=\"/{{global.mode}}/blocks\">\n" +
    "            Blocks\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': selected == 'propagate'}\">\n" +
    "          <a href=\"/{{global.mode}}/propagate\">\n" +
    "            Propagate\n" +
    "          </a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.nav-collapse -->\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/docs/explorer.html',
    "<docnav selected=\"'explorer'\"></docnav>\n" +
    "<br>\n" +
    "<div class=\"wide-container\">\n" +
    "  <form class=\"input-group input-group-lg\" ng-submit=\"submitRequest()\">\n" +
    "    <span class=\"input-group-addon h3\">REQUEST URL: </span>\n" +
    "    <input\n" +
    "      id=\"request-url\"\n" +
    "      type=\"text\"\n" +
    "      class=\"form-control no-white-space\"\n" +
    "      ng-model=\"request.url\"\n" +
    "      ng-class=\"{'input-success': request.isClean(), 'input-warning': !request.isClean()}\"\n" +
    "      >\n" +
    "    </input>\n" +
    "    <button ng-hide=\"true\" type=\"submit\"></button>\n" +
    "  </form>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "      <h3>REQUEST BUILDER</h3>\n" +
    "      <form class=\"bs-sidebar extra-padding\" ng-submit=\"submitRequest(true)\">\n" +
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


  $templateCache.put('/templates/docs/explorer/_response.html',
    "STATUS CODE: {{response.code}}\n" +
    "\n" +
    "BODY:\n" +
    "\n" +
    "{{response.body}}\n"
  );


  $templateCache.put('/templates/docs/ref.html',
    "<docnav selected=\"'reference'\"></docnav>\n" +
    "<div id=\"docs\" scroll-spy>\n" +
    "  <!-- SIDEBAR -->\n" +
    "  <div class=\"col-md-2\">\n" +
    "    <div class=\"bs-sidebar static\">\n" +
    "      <ul class=\"nav bs-sidenav\">\n" +
    "        <li>\n" +
    "          <div class=\"title\">\n" +
    "            <h5>\n" +
    "              <strong>Reference</strong>\n" +
    "            </h5>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li ng-repeat=\"s in sections\" spy=\"{{s.resource}}\" id=\"resource-{{s.resource}}\">\n" +
    "          <a href=\"/docs/ref#{{s.resource}}\">{{s.resource.capitalize()}}</a>\n" +
    "          <ul class=\"nav\">\n" +
    "            <li ng-repeat=\"sub in s.subs.slice(1)\" spy=\"{{sub.id}}\" id=\"sidebar-{{sub.id}}\">\n" +
    "              <span class='sub'>\n" +
    "                <a href=\"/docs/ref#{{sub.id}}\">{{sub.name.capitalize()}}</a>\n" +
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
    "          ng-class=\"{'btn-primary': global.language === 'nodejs'}\"\n" +
    "          ng-click=\"global.setLanguage('nodejs')\"\n" +
    "        >\n" +
    "          Node.js\n" +
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
    "      <span ng-repeat=\"s in sections\" id=\"{{s.resource}}\">\n" +
    "        <div class=\"line\" ng-cloak></div>\n" +
    "        <span ng-repeat=\"sub in s.subs\" id=\"{{sub.id}}\">\n" +
    "          <div class=\"row section\">\n" +
    "            <div class=\"col-md-6 section-description\" >\n" +
    "              <br>\n" +
    "              <div\n" +
    "                ng-if=\"sub.name !== undefined\"\n" +
    "                ng-include=\"refUrl(s.resource, sub.folder, 'description')\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 section-example\">\n" +
    "              <div ng-show=\"global.language === 'curl'\">\n" +
    "                <div\n" +
    "                  ng-if=\"sub.name !== undefined\"\n" +
    "                  ng-include=\"refUrl(s.resource, sub.folder, 'curl')\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div ng-show=\"global.language === 'nodejs'\">\n" +
    "                <div\n" +
    "                  ng-if=\"sub.name !== undefined\"\n" +
    "                  ng-include=\"refUrl(s.resource, sub.folder, 'nodejs')\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div ng-show=\"global.language === 'ruby'\">\n" +
    "                <div\n" +
    "                  ng-if=\"sub.name !== undefined\"\n" +
    "                  ng-include=\"refUrl(s.resource, sub.folder, 'ruby')\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </span>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "    <div class=\"space-big\"></div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/intro/_description.html',
    "<h2>Addresses</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  Get all associated information for a single or batch of Bitcoin address/es, including transaction information.\n" +
    "</p>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/intro/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/intro/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/single/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/addresses/<span class='text-primary'>&lt;address&gt;</span>?param=value\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://testnet.helloblock.io/v1/addresses/<span class='text-primary'>mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L</span>?limit=20\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"address\": {\n" +
    "      \"totalReceivedValue\": 573211091000,\n" +
    "      \"totalReceivedCount\": 318,\n" +
    "      \"totalSentValue\": 573204032000,\n" +
    "      \"totalSentCount\": 315,\n" +
    "      \"balance\": 7059000,\n" +
    "      \"transactionsCount\": 320,\n" +
    "      \"address\": \"mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L\",\n" +
    "      \"hash160\": \"a5319d469e1ddd9558bd558a50e95f74b3da58c9\",\n" +
    "      \"unspents\": [ ... Unspent Objects ],\n" +
    "      \"transactions\": [ ... Transaction Objects ]\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/single/_description.html',
    "<h3>Retrieve an Address</h3>\n" +
    "<br>\n" +
    "<p>Gets and returns data for a single address.</p>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Param Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>address: </td>\n" +
    "      <td></td>\n" +
    "      <td><em>string</em></td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>limit: </td>\n" +
    "      <td>20</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>offset: </td>\n" +
    "      <td>0</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>transactions: </td>\n" +
    "      <td>true</td>\n" +
    "      <td><em>boolean</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>unspents: </td>\n" +
    "      <td>true</td>\n" +
    "      <td><em>boolean</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Address</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>totalReceivedValue: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>totalReceivedCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>totalSentValue: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>totalSentCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>balance: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>transactionsCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>address: </td>\n" +
    "      <td><em>string</em> (base58)</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>hash160: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>unspents: </td>\n" +
    "      <td><em>array</em> of Transaction Objects</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>transactions: </td>\n" +
    "      <td><em>array</em> of Transaction Objects</td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/single/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/single/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/transactions/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/addresses/transactions?addresses=<span class='text-primary'>&lt;address&gt;</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://testnet.helloblock.io/v1/addresses/transactions?addresses=<span class='text-primary'>mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L</span>&addresses=<span class='text-primary'>mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo</span>&limit=10\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"transactions\": [\n" +
    "    {\n" +
    "      \"txHash\": \"7045d95d7c5f265e906dd74ad094296c85c7259003d7ef1c0cd95d51f27e8088\",\n" +
    "      \"version\": 1,\n" +
    "      \"size\": 258,\n" +
    "      \"blockHash\": \"000000000031c83fc78bf850f2f305c47ee7ee5a6e0fc3c605243dc0cd84a4f3\",\n" +
    "      \"blockHeight\": 191787,\n" +
    "      \"blockTime\": 1393130965,\n" +
    "      \"estimatedTxTime\": 1393124914,\n" +
    "      \"confirmations\": 10717,\n" +
    "      \"inputsCount\": 1,\n" +
    "      \"outputsCount\": 2,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "        \"index\": 1,\n" +
    "        \"txHash\": \"99bc6992e517dd4fedc17db8df7e9d4055b13c67dbf48ecaae714e0b95eec597\",\n" +
    "        \"value\": 429782704,\n" +
    "        \"address\": \"mzPkw5EdvHCntC2hrhRXSqwHLHpLWzSZiL\",\n" +
    "        \"hash160\": \"cf0dfe6e0fa6ea5dda32c58ff699071b672e1faf\",\n" +
    "        \"scriptSig\": \"48304502207163c442e56a1c0f6129b167cd4db2a555ec728e1cc5a06fec5034fa4cf5b71a022100eea4c3ff39640e7b6a37dcb2fdafa067aa5412e266278ac29fe752a0781bf997014104e1934263e84e202ebffca95246b63c18c07cd369c4f02de76dbd1db89e6255dacb3ab1895af0422e24e1d1099e80f01b899cfcdf9b947575352dbc1af57466b5\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "        \"index\": 0,\n" +
    "        \"value\": 10000,\n" +
    "        \"scriptPubKey\": \"76a914652c453e3f8768d6d6e1f2985cb8939db91a4e0588ac\",\n" +
    "        \"spent\": false,\n" +
    "        \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\",\n" +
    "        \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\",\n" +
    "        \"type\": \"pubkeyhash\"\n" +
    "        },\n" +
    "        {\n" +
    "        \"index\": 1,\n" +
    "        \"value\": 429762704,\n" +
    "        \"scriptPubKey\": \"76a914cf0dfe6e0fa6ea5dda32c58ff699071b672e1faf88ac\",\n" +
    "        \"spent\": true,\n" +
    "        \"address\": \"mzPkw5EdvHCntC2hrhRXSqwHLHpLWzSZiL\",\n" +
    "        \"hash160\": \"cf0dfe6e0fa6ea5dda32c58ff699071b672e1faf\",\n" +
    "        \"type\": \"pubkeyhash\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"totalInputsValue\": 429782704,\n" +
    "      \"totalOutputsValue\": 429772704,\n" +
    "      \"fees\": 10000,\n" +
    "      \"estimatedTxDirection\": \"incoming\",\n" +
    "      \"estimatedTxValue\": 10000\n" +
    "    },\n" +
    "    ... More Transaction Objects\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/transactions/_description.html',
    "<h3>Retrieve Transactions</h3>\n" +
    "<br>\n" +
    "<p>Batch gets and returns the transactions for multiple addresses.</p>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Param Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>addresses: </td>\n" +
    "      <td></td>\n" +
    "      <td><em>array</em> of <em>strings</em></td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>limit: </td>\n" +
    "      <td>20</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>offset: </td>\n" +
    "      <td>0</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Transactions</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>txHash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>version: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>size: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>blockHash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>blockHeight: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>blockTime: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>estimatedTxTime: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>confirmations: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>inputsCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>outputsCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>inputs: </td>\n" +
    "      <td><em>array</em> of input <em>objects</em> (see below)</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>inputs: </td>\n" +
    "      <td><em>array</em> of output <em>objects</em> (see below)</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>totalInputsValue: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>totalOutputsValue: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>fees: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>estimatedTxDirection: </td>\n" +
    "      <td>\n" +
    "        <div>\n" +
    "          <em>string</em>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          Related to address/es given\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          \"incoming\" || \"outgoing\"\n" +
    "        </div>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>estimatedTxValue: </td>\n" +
    "      <td>\n" +
    "        <em>integer</em>\n" +
    "        <div>\n" +
    "          Related to address/es given\n" +
    "        </div>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/transactions/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/transactions/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/unspents/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/addresses/unspents?addresses=<span class='text-primary'>&lt;address&gt;</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://testnet.helloblock.io/v1/addresses/unspents?addresses=<span class='text-primary'>mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L</span>&addresses=<span class='text-primary'>mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo</span>&limit=10\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"unspents\": [\n" +
    "    {\n" +
    "      \"confirmations\": 19117,\n" +
    "      \"blockHeight\": 183387,\n" +
    "      \"txHash\": \"244ab8fbd2bd2959fb00cf3ea06ab192965c9a77d889246b2b3c8480ae259639\",\n" +
    "      \"index\": 1,\n" +
    "      \"scriptPubKey\": \"76a914a5319d469e1ddd9558bd558a50e95f74b3da58c988ac\",\n" +
    "      \"type\": \"pubkeyhash\",\n" +
    "      \"value\": 7039000,\n" +
    "      \"hash160\": \"a5319d469e1ddd9558bd558a50e95f74b3da58c9\",\n" +
    "      \"address\": \"mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L\"\n" +
    "    },\n" +
    "    ... More Unspent Objects\n" +
    "    ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/unspents/_description.html',
    "<h3>Retrieve Unspent Outputs</h3>\n" +
    "<br>\n" +
    "<p>Batch gets and returns the unspent outputs for multiple addresses.</p>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Param Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>addresses: </td>\n" +
    "      <td></td>\n" +
    "      <td><em>array</em> of <em>strings</em></td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>limit: </td>\n" +
    "      <td>20</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>offset: </td>\n" +
    "      <td>0</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Unspents</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>confirmations: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>blockHeight: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>txHash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>index: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>scriptPubKey: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>type: </td>\n" +
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
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/unspents/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/unspents/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/blockchain.info/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/blockchain.info/intro/_description.html',
    "<h2>Blockchain.info Mirror</h2>\n" +
    "<br>\n" +
    "<h3>Docs coming soon ...</h3>\n" +
    "<br><br>\n"
  );


  $templateCache.put('/templates/docs/ref/blockchain.info/intro/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/blockchain.info/intro/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/blocks/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/blocks/intro/_description.html',
    "<h2>Blocks</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  Get all associated information regarding a Bitcoin blocks, including transactions within a block.\n" +
    "</p>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/ref/blocks/intro/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/blocks/intro/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/ref/blocks/latest/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/blocks/latest?param=value\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class='curl'>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://testnet.helloblock.io/v1/blocks/latest?limit=5\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "... as above\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/blocks/latest/_description.html',
    "<h3>Retrieve latest Blocks</h3>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Param Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>limit: </td>\n" +
    "      <td>20</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>offset: </td>\n" +
    "      <td>0</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Blocks</strong></p>\n" +
    "<p>\n" +
    "  Returns <em>array</em> of Block Objects\n" +
    "</p>\n"
  );


  $templateCache.put('/templates/docs/ref/blocks/latest/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/blocks/latest/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/blocks/single/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/blocks/<span class='text-primary'>&lt;blockId&gt;</span>?param=value\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://testnet.helloblock.io/v1/blocks/<span class='text-primary'>123123</span>?limit=20\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"block\": {\n" +
    "      \"blockHeight\": 100000,\n" +
    "      \"blockHash\": \"000000000003ba27aa200b1cecaad478d2b00432346c3f1f3986da1afd33e506\",\n" +
    "      \"blockTime\": 1293623863,\n" +
    "      \"previousBlockHash\": \"000000000002d01c1fccc21636b607dfd930d31d01c3a62104612a1719011250\",\n" +
    "      \"bits\": 453281356,\n" +
    "      \"version\": 1,\n" +
    "      \"merkleRootHash\": \"f3e94742aca4b5ef85488dc37c06c3282295ffec960994b2c0d5ac2a25a95766\",\n" +
    "      \"nonce\": 274148111,\n" +
    "      \"totalInputsValue\": 5301000000,\n" +
    "      \"totalOutputsValue\": 10301000000,\n" +
    "      \"transactionsCount\": 4,\n" +
    "      \"confirmations\": 188855,\n" +
    "      \"transactions\": [ ... Transaaction Objects ]\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/blocks/single/_description.html',
    "<h3>Retrieve a Block</h3>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Param Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>blockId: </td>\n" +
    "      <td></td>\n" +
    "      <td>\n" +
    "        <em>string</em>\n" +
    "        <div>Block Height or Block Hash</div>\n" +
    "      </td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>limit: </td>\n" +
    "      <td>20</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>offset: </td>\n" +
    "      <td>0</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>transactions: </td>\n" +
    "      <td>true</td>\n" +
    "      <td><em>boolean</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Address</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>blockHeight: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>blockHash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>blockTime: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>previousBlockHash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>bits: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>version: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>merkleRootHash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>totalInputsValue: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>totalOutputsValue: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>transactionsCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>confirmations: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>transactions: </td>\n" +
    "      <td><em>array</em> of Transaction Objects</td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/blocks/single/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/blocks/single/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/ref/faucet/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/faucet/intro/_description.html',
    "<h2>Faucet</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  This Faucet provides free Bitcoins (on testnet) for testing purposes in development.\n" +
    "</p>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/ref/faucet/intro/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/faucet/intro/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/faucet/single/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/faucet?param=value\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://testnet.helloblock.io/v1/faucet?type=1\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"privateKeyWIF\": \"91wNaeHUxQ5hejapS5fLVgVEA2yh9E3rzxQNZ8XpaiHpQehpvjJ\",\n" +
    "    \"privateKeyHex\": \"2e72587d6ad78b04b15331f03adfc3a1ae72794e0e2e3aa82ad7025e2d97ec82\",\n" +
    "    \"address\": \"mzqZADCoj3KgPmW9vqpLFe1adY3goUYTGG\",\n" +
    "    \"hash160\": \"d3eefb19630a1a3a7b267ea6ff9d145377519347\",\n" +
    "    \"faucetType\": 1,\n" +
    "    \"unspents\": [{\n" +
    "      \"confirmations\": 11495,\n" +
    "      \"blockHeight\": 192668,\n" +
    "      \"txHash\": \"fdacf1ac89ee333095acab51b1f88994ade14bfa156c2be682478e35fe29df9d\",\n" +
    "      \"index\": 0,\n" +
    "      \"scriptPubKey\": \"76a914d3eefb19630a1a3a7b267ea6ff9d14537751934788ac\",\n" +
    "      \"type\": \"pubkeyhash\",\n" +
    "      \"value\": 100000,\n" +
    "      \"hash160\": \"d3eefb19630a1a3a7b267ea6ff9d145377519347\",\n" +
    "      \"address\": \"mzqZADCoj3KgPmW9vqpLFe1adY3goUYTGG\"\n" +
    "    }]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/faucet/single/_description.html',
    "<h3>Retrieve Unspents</h3>\n" +
    "<br>\n" +
    "<p>Retrieves a unique key pair (address with private key) with pre-existing unspent outputs. This is particularly useful in \"before each\" blocks in test suites. Note that no key pair is ever retrieved twice. See the table below for different variations of unspent outputs combinations</p>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Param Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>type: </td>\n" +
    "      <td></td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "\n" +
    "<p><strong>Response Attributes for Faucet</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>privateKeyWIF: </td>\n" +
    "      <td><em>string</em> <a href=\"https://en.bitcoin.it/wiki/Wallet_import_format\" target=\"_blank\">Wallet Import Format</a></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>privateKeyHex: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>address: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>hash160: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>faucetType: </td>\n" +
    "      <td><em>integer</em> (1, 2 or 3)</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>unspents: </td>\n" +
    "      <td>\n" +
    "        Unspent Objects\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<p><strong>Faucet Types</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <td>Faucet Type</td>\n" +
    "      <td>Unspent Outputs Values</td>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>1</td>\n" +
    "      <td>[100000]</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>2</td>\n" +
    "      <td>[25000, 25000]</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>3</td>\n" +
    "      <td>[100000, 50000, 10000]</td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/faucet/single/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/faucet/single/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/faucet/withdrawal/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "POST https://testnet.helloblock.io/v1/faucet/withdrawal\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl -X POST https://testnet.helloblock.io/v1/faucet/withdrawal \\\n" +
    " -d \"amount=<span class='text-primary'>100000</span>\" \\\n" +
    " -d \"toAddress=<span class='text-primary'>mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo</span>\"\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"amount\": 100000,\n" +
    "    \"fromAddress\": \"mzPkw5EdvHCntC2hrhRXSqwHLHpLWzSZiL\",\n" +
    "    \"toAddress\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\",\n" +
    "    \"txHash\": \"80e8910251b323f51dd8b3319372509149fecdc08887807c0030538d1135c4f3\"\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/faucet/withdrawal/_description.html',
    "<h3>Withdrawal</h3>\n" +
    "<br>\n" +
    "<p><strong>Body Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>toAddress: </td>\n" +
    "      <td></td>\n" +
    "      <td><em>string</em></td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>amount: </td>\n" +
    "      <td>(max: 1000000)</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>amount: </td>\n" +
    "      <td>\n" +
    "        <em>integer</em>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>fromAddress: </td>\n" +
    "      <td>\n" +
    "        <em>string</em>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>toAddress: </td>\n" +
    "      <td>\n" +
    "        <em>string</em>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>txHash: </td>\n" +
    "      <td>\n" +
    "        <em>string</em>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/faucet/withdrawal/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/faucet/withdrawal/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/introduction/errors/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">RESPONSE CODE SUMMARY</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "200 OK            -   Everything worked as expected.\n" +
    "400 Bad Request   -   Often missing a required parameter.\n" +
    "404 Not Found     -   The requested item does not exist.\n" +
    "500 Server Error  -   Something went wrong on Hello Block servers.\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "CODE: 400\n" +
    "\n" +
    "BODY:\n" +
    "\n" +
    "{\n" +
    "  \"status\": \"fail\",\n" +
    "  \"message\": \"There is 1 invalid address\",\n" +
    "  \"details\": [\n" +
    "    \"mvaRDyLUeF4CP7Lu9umbU3FxehyC5nU\"\n" +
    "  ]\n" +
    "}\n" +
    "\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/introduction/errors/_description.html',
    "<h3>Errors</h3>\n" +
    "<br><br>\n" +
    "<p>\n" +
    "  Conventional HTTP response codes are used to indicate success or failure of an API request. Codes in the 2xx range indicate success, codes in the 4xx range indicate an error that resulted from the provided information (e.g. a required parameter was missing), and codes in the 5xx range indicate an error with Hello Block's servers.\n" +
    "</p>\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>status: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>message: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>details: </td>\n" +
    "      <td><em>array</em> of <em>strings</em></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/introduction/errors/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/introduction/errors/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/ref/introduction/intro/_curl.html',
    "<br><br>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "echo \"Hello, block!\"\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h4 white\">BLOCKCHAIN ENDPOINTS</div>\n" +
    "<br><br>\n" +
    "<div class=\"h5 title\">PRODUCTION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "    https://<span class='text-primary'>mainnet</span>.helloblock.io/v1/\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">DEVELOPMENT</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "    https://<span class='text-primary'>testnet</span>.helloblock.io/v1/\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">DEVELOPMENT (blockchain.info mirror)</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "    https://<span class='text-primary'>testnet</span>.helloblock.io/<span class='text-primary'>b</span>/\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/introduction/intro/_description.html',
    "<h2>Introduction</h2>\n" +
    "<br>\n" +
    "<p>HelloBlock provides node hosting for both MainNet and TestNet, and give HTTPS access to Blockchain Data through a RESTful JSON API.</p>\n" +
    "\n" +
    "<p>It is designed to have predictable, resource-oriented URLs and meaningful HTTP response codes to indicate API errors. We support cross-origin resource sharing to allow client-side web application communication. The codebase is open source.</p>\n" +
    "<p>This is the API we’ve always wanted. We hope you will love it too.</p>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/ref/introduction/intro/_nodejs.html',
    "<br><br>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "$ npm install helloblock-js --save\n" +
    "\n" +
    "console.log(\"Docs in progress...Please visit <a href=\"https://github.com/helloblock/helloblock-js\">https://github.com/helloblock-js/</a>\")\n" +
    "\n" +
    "\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/introduction/intro/_ruby.html',
    "<br><br>\n" +
    "<pre>\n" +
    "  <code class=\"ruby\" hljs>\n" +
    "puts \"The Ruby Client Library is a work in progress ...\"\n" +
    "\n" +
    "puts \"Please visit <a href=\"https://github.com/BitcoinMafia/\">https://github.com/BitcoinMafia/</a> if you'd like to contribute.\"\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/introduction/response/_curl.html',
    "<br><br>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "CODE: 200\n" +
    "\n" +
    "BODY:\n" +
    "\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"resource\": {\n" +
    "      \"id\" : 1,\n" +
    "      \"attribute\" : \"Description\",\n" +
    "      \"body\" : \"Useful information\"\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/introduction/response/_description.html',
    "<h3>Response Format</h3>\n" +
    "<br><br>\n" +
    "<p>\n" +
    "  HelloBlock follows the <a target=\"_blank\" href=\"http://labs.omniti.com/labs/jsend\">JSend</a> response structure, ideal for RESTful APIs.\n" +
    "</p>\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>status: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>data: </td>\n" +
    "      <td><em>object</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>meta: </td>\n" +
    "      <td>Potentially other meta data</td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/introduction/response/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/introduction/response/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/streaming/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/streaming/intro/_description.html',
    "<h2>Streaming</h2>\n" +
    "<br>\n" +
    "<h3>Docs coming soon ...</h3>\n" +
    "<br>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/ref/streaming/intro/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/streaming/intro/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/transactions/batch/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/transactions?txHashes=<span class=\"text-primary\">&lt;txHash&gt;</span></code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class='curl'>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://testnet.helloblock.io/v1/transactions?txHashes=<span class='text-primary'>6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3</span>&txHashes=<span class='text-primary'>770e6e4c66fc61fb523e5aefe11780b26c8473638e7065ca726a6492ab7f6345</span>&txHashes=<span class='text-primary'>47bf46f92384002dc008696dac3437a2ca4a2696c21a3f6d1d789513e7b9a3f0</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"transactions\": [{\n" +
    "      \"txHash\": \"770e6e4c66fc61fb523e5aefe11780b26c8473638e7065ca726a6492ab7f6345\",\n" +
    "      \"version\": 1,\n" +
    "      \"size\": 374,\n" +
    "      \"blockHash\": \"00000000ba5b52e73bced6159bbd67602d0108816f4eaad8c669c4a78132c254\",\n" +
    "      \"blockHeight\": 155064,\n" +
    "      \"blockTime\": 1388685039,\n" +
    "      \"estimatedTxTime\": 1388684762,\n" +
    "      \"confirmations\": 47454,\n" +
    "      \"inputsCount\": 2,\n" +
    "      \"outputsCount\": 2,\n" +
    "      \"inputs\": [{\n" +
    "        \"index\": 0,\n" +
    "        \"txHash\": \"51421800a059ef82a002e6b5b626e414683f5c1c977941365c1e3f70bde9a755\",\n" +
    "        \"value\": 1008180,\n" +
    "        \"address\": \"mwfwbACje3yuSyT3rFPW3aJFtJcWPT4mHa\",\n" +
    "        \"hash160\": \"b1352ae996dea0f979973f363a4ff47d336f0553\",\n" +
    "        \"scriptSig\": \"48304502203d0d93fc9dd9b7cbf9d84b7d8e689420bcac41aa99c57c217ed97c909da4ac2c022100dc0437b1e1a8061b56300a255b4d1be3e0b7f9bdd76ce2093a48cfbf35dc02000121030e37a66c5c9add8b0447e29ffed5c7a733295660c53dc22070f7b6214d2629d4\"\n" +
    "      }, {\n" +
    "        \"index\": 0,\n" +
    "        \"txHash\": \"02a4547e9ec5ef423f4fa640f647e6677e8f6667c3570a183a74909ebe7d99d3\",\n" +
    "        \"value\": 123000,\n" +
    "        \"address\": \"mqgpWTNcn6ZJPEkysz83uTP9jvwWrb34cw\",\n" +
    "        \"hash160\": \"6f8eeafa1e979a730994c644dc8484c9493271f3\",\n" +
    "        \"scriptSig\": \"4830450221008deabc06fd13a35b2f3358a13b97390fd18cd620a19569936364689bbb67346502207cedb466487a865ca3d034244330619373d84ceac403783f630974f9bcf05d4801210259719c7bfad5ef7e921a00ca5d01271088b8c94e11ac4fe74f99b8e90e394560\"\n" +
    "      }],\n" +
    "      \"outputs\": [{\n" +
    "        \"index\": 0,\n" +
    "        \"value\": 1100000,\n" +
    "        \"scriptPubKey\": \"76a914356b0d41679d2d41b516311176020302f6375a5c88ac\",\n" +
    "        \"spent\": true,\n" +
    "        \"address\": \"mkPQMJsumQzQLzuevNqb9t8N47xiMTh91z\",\n" +
    "        \"hash160\": \"356b0d41679d2d41b516311176020302f6375a5c\",\n" +
    "        \"type\": \"pubkeyhash\"\n" +
    "      }, {\n" +
    "        \"index\": 1,\n" +
    "        \"value\": 21180,\n" +
    "        \"scriptPubKey\": \"76a9140deba7da7d63a92a29ea78b2261e3f3c4c3cdc4988ac\",\n" +
    "        \"spent\": false,\n" +
    "        \"address\": \"mgnZPC3wyrKuRG1cJDphWt1Ze4n7MCcBhE\",\n" +
    "        \"hash160\": \"0deba7da7d63a92a29ea78b2261e3f3c4c3cdc49\",\n" +
    "        \"type\": \"pubkeyhash\"\n" +
    "      }],\n" +
    "      \"totalInputsValue\": 1131180,\n" +
    "      \"totalOutputsValue\": 1121180,\n" +
    "      \"fees\": 10000\n" +
    "    }, ... ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/batch/_description.html',
    "<h3>Retrieve multiple Transactions</h3>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Param Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>txHashes: </td>\n" +
    "      <td></td>\n" +
    "      <td>\n" +
    "        <em>array</em> of <em>strings</em>\n" +
    "        <div>\n" +
    "          Repeat for multiple transactions, e.g.\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          \"txHashes[]=a&txHashes[]=b&txHashes[]=c\"\n" +
    "        </div>\n" +
    "      </td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>rawTxHex: </td>\n" +
    "      <td>false</td>\n" +
    "      <td><em>boolean</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Transactions</strong></p>\n" +
    "<p>\n" +
    "  Returns <em>array</em> of Transaction Objects\n" +
    "</p>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/batch/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/transactions/batch/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/transactions/intro/_description.html',
    "<h2>Transactions</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  Get all associated information regarding a single or batch of Bitcoin transaction/s including its inputs and outputs.\n" +
    "</p>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/intro/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/transactions/intro/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/latest/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/transactions/latest?param=value\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class='curl'>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://testnet.helloblock.io/v1/transactions/latest?limit=5\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "... as above\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/latest/_description.html',
    "<h3>Retrieve latest Transactions</h3>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Param Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>limit: </td>\n" +
    "      <td>20</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>offset: </td>\n" +
    "      <td>0</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Transactions</strong></p>\n" +
    "<p>\n" +
    "  Returns <em>array</em> of Transaction Objects\n" +
    "</p>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/latest/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/transactions/latest/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/transactions/post/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "POST https://testnet.helloblock.io/v1/transactions/\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl -X POST https://testnet.helloblock.io/v1/transactions \\\n" +
    " -d \"rawTxHex=<span class='text-primary'>0100000001ec71e2ceac8476bea21fbc4a97062c000f07def6c8ef8d9171fb1a5e113418e0010000008c493046022100e6f39b4393794ef03b0f9dc71395e0835a211015b42ab4329cb6a6c1c8b3c6ea022100f1ccae451f35e5c5ad25a8f7e7b5e778bafc4dc69dd560fab1cbadbb88767916014104e1934263e84e202ebffca95246b63c18c07cd369c4f02de76dbd1db89e6255dacb3ab1895af0422e24e1d1099e80f01b899cfcdf9b947575352dbc1af57466b5ffffffff0210270000000000001976a914652c453e3f8768d6d6e1f2985cb8939db91a4e0588ace065f81f000000001976a914cf0dfe6e0fa6ea5dda32c58ff699071b672e1faf88ac00000000</span>\"\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"transaction\": {\n" +
    "      \"txHash\": \"005cd997f92d11afc621b2eabdc5eea952d31da1cb27a05dc5e34d611bed1496\",\n" +
    "      \"rawTxHex\": \"0100000001ec71e2ceac8476bea21fbc4a97062c000f07def6c8ef8d9171fb1a5e113418e0010000008c493046022100e6f39b4393794ef03b0f9dc71395e0835a211015b42ab4329cb6a6c1c8b3c6ea022100f1ccae451f35e5c5ad25a8f7e7b5e778bafc4dc69dd560fab1cbadbb88767916014104e1934263e84e202ebffca95246b63c18c07cd369c4f02de76dbd1db89e6255dacb3ab1895af0422e24e1d1099e80f01b899cfcdf9b947575352dbc1af57466b5ffffffff0210270000000000001976a914652c453e3f8768d6d6e1f2985cb8939db91a4e0588ace065f81f000000001976a914cf0dfe6e0fa6ea5dda32c58ff699071b672e1faf88ac00000000\"\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/post/_description.html',
    "<h3>Propagate a Transaction</h3>\n" +
    "<br>\n" +
    "<p><strong>Body Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>rawTxHex: </td>\n" +
    "      <td></td>\n" +
    "      <td><em>string</em></td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>txHash: </td>\n" +
    "      <td>\n" +
    "        <em>string</em>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>rawTxHex: </td>\n" +
    "      <td>\n" +
    "        <em>string</em>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/post/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/transactions/post/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/single/_curl.html',
    "<br><br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/transactions/<span class='text-primary'>&lt;txHash&gt;</span>?param=value\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class='curl'>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://testnet.helloblock.io/v1/transactions/<span class='text-primary'>2542cd64e02d902975dc6e2e97797ceec5a84e8597c80d22a9e2dbd16e748738</span>?rawTxHex=false\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"transaction\": {\n" +
    "      \"txHash\": \"2542cd64e02d902975dc6e2e97797ceec5a84e8597c80d22a9e2dbd16e748738\",\n" +
    "      \"version\": 1,\n" +
    "      \"size\": 226,\n" +
    "      \"blockHash\": \"00000000c9b0330dd0d02607962a37e0010644b060da244189ee0632fb851c89\",\n" +
    "      \"blockHeight\": 154810,\n" +
    "      \"blockTime\": 1388393306,\n" +
    "      \"estimatedTxTime\": 1388393306,\n" +
    "      \"confirmations\": 47707,\n" +
    "      \"inputsCount\": 1,\n" +
    "      \"outputsCount\": 2,\n" +
    "      \"inputs\": [{\n" +
    "        \"index\": 0,\n" +
    "        \"txHash\": \"ff9e7a02702ea393facf57d94f233e58a29a9d7c2f3080bf404b1ec5ec572eb2\",\n" +
    "        \"value\": 53022177768,\n" +
    "        \"address\": \"mjswyggXrNJKdb1PHEfqrFxyefwFnn1q68\",\n" +
    "        \"hash160\": \"2fd8f955587181fdf2caded0d41c8f52c084cee4\",\n" +
    "        \"scriptSig\": \"483045022100cc3a4f04c04b3aa6c4c98632f72641112e027a0f2280351e5722449c658d4a6c0220074f0537f668d4049c7b0da91486d6d83a2f37a60512a1771aedc35c97f0e92b0121038708f0be6ec42ff5788c5cd51c87f245538c1ecf890c12774fe006b55797c114\"\n" +
    "      }],\n" +
    "      \"outputs\": [{\n" +
    "        \"index\": 0,\n" +
    "        \"value\": 46970000,\n" +
    "        \"scriptPubKey\": \"76a9144465358b1c07d001a49216c466b6e8de5c708d9988ac\",\n" +
    "        \"spent\": false,\n" +
    "        \"address\": \"mmkbVEWhehm6mKUgV36K6oWX4BCZcp5by3\",\n" +
    "        \"hash160\": \"4465358b1c07d001a49216c466b6e8de5c708d99\",\n" +
    "        \"type\": \"pubkeyhash\"\n" +
    "      }, {\n" +
    "        \"index\": 1,\n" +
    "        \"value\": 52975207768,\n" +
    "        \"scriptPubKey\": \"76a9146a0d58b53a6b6aef32d5907e237ad57e6d84d0d688ac\",\n" +
    "        \"spent\": true,\n" +
    "        \"address\": \"mqBhuiixrkwypkjNHFwSNYiFEtAiDr54gp\",\n" +
    "        \"hash160\": \"6a0d58b53a6b6aef32d5907e237ad57e6d84d0d6\",\n" +
    "        \"type\": \"pubkeyhash\"\n" +
    "      }],\n" +
    "      \"totalInputsValue\": 53022177768,\n" +
    "      \"totalOutputsValue\": 53022177768,\n" +
    "      \"fees\": 0\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/single/_description.html',
    "<h3>Retrieve a Transaction</h3>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Param Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>txHash: </td>\n" +
    "      <td></td>\n" +
    "      <td><em>string</em></td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>\n" +
    "        <div>rawTxHex: </div>\n" +
    "        <div>(returns raw transaction hex)</div>\n" +
    "      </td>\n" +
    "      <td>false</td>\n" +
    "      <td><em>boolean</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Transaction</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>txHash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>version: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>size: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>blockHash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>blockHeight: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>blockTime: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>estimatedTxTime: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>confirmations: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>inputsCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>outputsCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>inputs: </td>\n" +
    "      <td><p><em>array</em> of Input Objects</p>\n" +
    "        <table class='table table-bordered table-condensed table-docs'>\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>index</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>txHash</td>\n" +
    "              <td><em>string</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>value</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>address</td>\n" +
    "              <td><em>string</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>hash160</td>\n" +
    "              <td><em>string</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>scriptSig</td>\n" +
    "              <td><em>string</em></td>\n" +
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
    "              <td>index</td>\n" +
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
    "              <td><em>boolean</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>address</td>\n" +
    "              <td><em>string</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>hash160</td>\n" +
    "              <td><em>string</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>type</td>\n" +
    "              <td><em>string</em></td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>totalInputsValue: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>totalOutputsValue: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>fees: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/single/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/transactions/single/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/ref/wallet/batch/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/wallet?addresses=<span class=\"text-primary\">&lt;address&gt;</span>\n" +
    "</code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class='curl'>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "$ curl https://testnet.helloblock.io/v1/wallet?&addresses=<span class='text-primary'>mu1izpJmF7CHnbVcH59f1PqfvXnmiBEMq8</span>&addresses=<span class='text-primary'>mvANEVQRsAC7xHt4GW2iSsJwUSMgkGX2k3</span>&addresses=<span class='text-primary'>n1Fr4r3wEcbXZGQJaqJkFRiMpYLAsk81RX</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"summary\": {\n" +
    "      \"transactionsCount\": 6,\n" +
    "      \"totalReceivedValue\": 8565778,\n" +
    "      \"totalSentValue\": 8565778,\n" +
    "      \"balance\": 0\n" +
    "    },\n" +
    "    \"addresses\": [{\n" +
    "      \"totalReceivedValue\": 4342889,\n" +
    "      \"totalReceivedCount\": 1,\n" +
    "      \"totalSentValue\": 4342889,\n" +
    "      \"totalSentCount\": 1,\n" +
    "      \"balance\": 0,\n" +
    "      \"transactionsCount\": 2,\n" +
    "      \"address\": \"n1Fr4r3wEcbXZGQJaqJkFRiMpYLAsk81RX\",\n" +
    "      \"hash160\": \"d88713de7b1d0837e728de5d5e62399f5e6e145e\"\n" +
    "    }, {\n" +
    "      \"totalReceivedValue\": 4122889,\n" +
    "      \"totalReceivedCount\": 1,\n" +
    "      \"totalSentValue\": 4122889,\n" +
    "      \"totalSentCount\": 1,\n" +
    "      \"balance\": 0,\n" +
    "      \"transactionsCount\": 2,\n" +
    "      \"address\": \"mu1izpJmF7CHnbVcH59f1PqfvXnmiBEMq8\",\n" +
    "      \"hash160\": \"940a991f8dd0f8d7609cb8e3f07235d3a136413a\"\n" +
    "    }, {\n" +
    "      \"totalReceivedValue\": 100000,\n" +
    "      \"totalReceivedCount\": 1,\n" +
    "      \"totalSentValue\": 100000,\n" +
    "      \"totalSentCount\": 1,\n" +
    "      \"balance\": 0,\n" +
    "      \"transactionsCount\": 2,\n" +
    "      \"address\": \"mvANEVQRsAC7xHt4GW2iSsJwUSMgkGX2k3\",\n" +
    "      \"hash160\": \"a0a5226c2e376c929d800a070399e5a3d0277c6e\"\n" +
    "    }],\n" +
    "    \"exchangeRates\": {\n" +
    "      \"BTCUSD\": {\n" +
    "        \"bitstamp\": 689.68,\n" +
    "        \"btce\": 654\n" +
    "      }\n" +
    "    },\n" +
    "    \"latestBlock\": {\n" +
    "        ...Block Object\n" +
    "    },\n" +
    "    \"transactions\": [...Transaction Objects]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/wallet/batch/_description.html',
    "<h3>Retrieve multiple Addresses</h3>\n" +
    "<br>\n" +
    "<p>Gets and returns data for multiple addresses.</p>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <tbody>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>Param Name</td>\n" +
    "        <td>Default Value</td>\n" +
    "        <td>Type</td>\n" +
    "        <td>Required</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tr>\n" +
    "      <td>addresses: </td>\n" +
    "      <td></td>\n" +
    "      <td><em>array</em> of <em>strings</em></td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>limit: </td>\n" +
    "      <td>20</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>offset: </td>\n" +
    "      <td>0</td>\n" +
    "      <td><em>integer</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Wallet</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>summary: </td>\n" +
    "      <td>\n" +
    "        <table class=\"table table-bordered table-docs table-condensed\">\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>transactionsCount</td>\n" +
    "              <td>\n" +
    "                <em>integer</em>\n" +
    "                <div>\n" +
    "                  transactions for all addresses\n" +
    "                </div>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>totalReceivedValue</td>\n" +
    "              <td>\n" +
    "                <em>integer</em>\n" +
    "                <div>\n" +
    "                  totalReceivedValue for all addresses\n" +
    "                </div>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>totalSentValue</td>\n" +
    "              <td>\n" +
    "                <em>integer</em>\n" +
    "                <div>\n" +
    "                  totalSentValue for all addresses\n" +
    "                </div>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>balance</td>\n" +
    "              <td>\n" +
    "                <em>integer</em>\n" +
    "                <div>\n" +
    "                  balance for all addresses\n" +
    "                </div>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>addresses: </td>\n" +
    "      <td><em>array</em> of <em>Address Objects</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>exchangeRates: </td>\n" +
    "      <td>\n" +
    "        <table class=\"table table-bordered table-docs table-condensed\">\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>BTCUSD</td>\n" +
    "              <td><em>Object</em> of exchange rates</td>\n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>latestBlock: </td>\n" +
    "      <td><em>Block Object</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>transactions: </td>\n" +
    "      <td><em>array</em> of <em>Transaction Objects</em></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n"
  );


  $templateCache.put('/templates/docs/ref/wallet/batch/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/wallet/batch/_ruby.html',
    "<code>RUBY</code>\n"
  );


  $templateCache.put('/templates/docs/ref/wallet/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/wallet/intro/_description.html',
    "<h2>Wallet</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  The Wallet object is a convenience endpoint for commonly queried data (e.g. User dashboards, user profiles). It contains a batch addresses request with transactions, exchange rate info etc ...\n" +
    "</p>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/ref/wallet/intro/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/wallet/intro/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/tutorials.html',
    "<docnav selected=\"'tutorial'\"></docnav>\n" +
    "<div id=\"docs\" class='container'>\n" +
    "  <!-- SIDEBAR -->\n" +
    "  <div class=\"col-md-3\">\n" +
    "    <div class=\"bs-sidebar\">\n" +
    "      <ul class=\"nav bs-sidenav\">\n" +
    "        <li>\n" +
    "          <div class=\"title\">\n" +
    "            <h5>\n" +
    "              <strong><em>Tutorials</em></strong>\n" +
    "            </h5>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li ng-repeat=\"t in tutorials\"\n" +
    "          ng-class=\"{'active': currentTutorial == t.file}\">\n" +
    "          <a href=\"/docs/tutorials/{{t.file}}\">\n" +
    "            {{t.name}}\n" +
    "          </a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-md-8\">\n" +
    "    <div ng-include=\"tutorialUrl(currentTutorial)\"></div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('/templates/docs/tutorials/getting-started.html',
    "<h1 class='text-center'>Getting Started</h1>\n" +
    "\n" +
    "<h3>Introduction</h3>\n" +
    "<blockquote>\n" +
    "  <p>Hey there, you've come here a bit early but we're really exciting to share the open source API we've build. All the endpoints work and we're writing up the docs now.</p>\n" +
    "  <p>In the mean time, shoot me an e-mail and let's discuss how we can help. scott@helloblock.io</p>\n" +
    "</blockquote>\n" +
    "\n" +
    "<!-- <h3>Lorem</h3>\n" +
    "<p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "</p>\n" +
    "<br>\n" +
    "<h3>SubTitle</h3>\n" +
    "<blockquote>\n" +
    "  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "  consequat.\n" +
    "</p>\n" +
    "</blockquote>\n" +
    "<div class=\"code-sample\">\n" +
    "  <tabset>\n" +
    "    <tab heading=\"ruby\">\n" +
    "      <pre>\n" +
    "        <code class=\"ruby\" hljs>\n" +
    "# Writing a comment\n" +
    "hex = \"123456789\"\n" +
    "\n" +
    "HelloBlock::Transaction.propagate({\n" +
    "  hex: hex,\n" +
    "  meta: \"blah\"\n" +
    "})\n" +
    "        </code>\n" +
    "      </pre>\n" +
    "    </tab>\n" +
    "    <tab heading=\"javascript\">\n" +
    "      <pre>\n" +
    "        <code class=\"javascript\" hljs>\n" +
    "// Writing a comment\n" +
    "var hex = \"123456789\"\n" +
    "\n" +
    "HelloBlock.Transaction.propagate({\n" +
    "  hex: hex,\n" +
    "  meta: \"blah\"\n" +
    "})\n" +
    "        </code>\n" +
    "      </pre>\n" +
    "    </tab>\n" +
    "  </tabset>\n" +
    "</div>\n" +
    "<br>\n" +
    "<h3>Subtitle</h3>\n" +
    "<h4>Sub-subtitle</h4>\n" +
    "<p>\n" +
    "  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "  <code class=\"single\">https://api.helloblock.com/</code>. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
    "  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "</p>\n" +
    "\n" +
    "<table class=\"table table-bordered\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th>Keyword</th>\n" +
    "      <th>Value</th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>Thing</td>\n" +
    "      <td>1231231231232</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>Thing</td>\n" +
    "      <td>1231231231232</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>Thing</td>\n" +
    "      <td>1231231231232</td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "<div class=\"code-sample\">\n" +
    "  <pre>\n" +
    "    <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  stats: \"success\",\n" +
    "  message: \"good job dude\",\n" +
    "  data: {\n" +
    "    a: 1,\n" +
    "    b: 1,\n" +
    "    c: 1,\n" +
    "  }\n" +
    "}\n" +
    "    </code>\n" +
    "  </pre>\n" +
    "</div>\n" +
    "<br>\n" +
    "<h3>Subtitle</h3>\n" +
    "<h4>Sub-subtitle</h4>\n" +
    "<p>\n" +
    "  <ol>\n" +
    "    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "    tempor </li>\n" +
    "    <li>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "    quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</li>\n" +
    "    <li> ea commodo\n" +
    "    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
    "    cillum dolore eu fugiat.</li>\n" +
    "  </ol>\n" +
    "</p>\n" +
    "\n" +
    "<h4>Sub-subtitle</h4>\n" +
    "<p>\n" +
    "  <ul>\n" +
    "    <li>Point one</li>\n" +
    "    <li>Point two</li>\n" +
    "    <li>Point three</li>\n" +
    "  </ul>\n" +
    "</p>\n" +
    "\n" +
    "\n" +
    "<div class=\"space-big\"></div>\n" +
    " -->\n"
  );


  $templateCache.put('/templates/docs/tutorials/send-transaction.html',
    "<h1 class='text-center'>Send a Transaction</h1>\n"
  );


  $templateCache.put('/templates/landing.html',
    "<div id=\"landing\">\n" +
    "  <div ng-show=\"emailSuccess()\" class='alert-message'>\n" +
    "    <div class=\"alert alert-success text-center\">\n" +
    "      <a class=\"close\" data-dismiss=\"alert\" href=\"#\" aria-hidden=\"true\">&times;</a>\n" +
    "      <span class=\"h4\">\n" +
    "        Thank you, we will be in touch shortly!\n" +
    "      </span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"centerpiece\">\n" +
    "    <div class=\"container\">\n" +
    "      <br>\n" +
    "      <br><br>\n" +
    "      <h1 class='main-title text-center white'>\n" +
    "        <strong>\n" +
    "          Focus on building Bitcoin apps, not infrastructure.\n" +
    "        </strong>\n" +
    "      </h1>\n" +
    "      <br>\n" +
    "      <h2 class='text-center white'>\n" +
    "        Get started with the Blockchain Data API\n" +
    "      </h2>\n" +
    "      <br><br>\n" +
    "      <div class=\"row text-center\">\n" +
    "        <a class=\"btn btn-success btn-lg\" href=\"/docs/tutorials\">\n" +
    "          <!-- TODO: should be explorer -->\n" +
    "          Getting Started\n" +
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
    "          Blockchain.info Mirror\n" +
    "        </h2>\n" +
    "        <p class='lead lead-smaller'>\n" +
    "          Provides separate testnet mirror which follows the Blockchain.info API conventions\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"feature col-md-4 text-center\">\n" +
    "        <br>\n" +
    "        <i class=\"fa fa-wrench fa-4x\"></i>\n" +
    "        <h2>\n" +
    "          Built for Developers\n" +
    "        </h2>\n" +
    "        <p class='lead lead-smaller'>\n" +
    "          HTTPS access to Blockchain Data through a RESTful JSON API. Hosted  Mainnet and Testnet.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"feature col-md-4 text-center\">\n" +
    "        <br>\n" +
    "        <i class=\"fa fa-btc fa-4x\"></i>\n" +
    "        <h2>\n" +
    "          Testnet3 Support\n" +
    "        </h2>\n" +
    "        <p class='lead lead-smaller'>\n" +
    "          Built with Testnet in mind from Day One to enable developers to write automated tests.\n" +
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
    "            If you are using the <a href=\"https://blockchain.info/api/blockchain_api\">Blockchain.info API</a> would like testnet support,\n" +
    "            substituted your base URL as follows:\n" +
    "          </p>\n" +
    "        </blockquote>\n" +
    "        <div>\n" +
    "          <h2 class='text-center'>\n" +
    "            <code>https://blockchain.info/</code>\n" +
    "          </h2>\n" +
    "          <h2>\n" +
    "            <code>\n" +
    "              <textarea class='big-input link' readonly selected>https://test.helloblock.io/b/</textarea>\n" +
    "            </code>\n" +
    "          </h2>\n" +
    "        </div>\n" +
    "        <br><br>\n" +
    "        <blockquote>\n" +
    "          <p class=\"lead\">\n" +
    "            <code class=''>https://test.helloblock.io/b/</code>\n" +
    "            mirrors the methods and responses specified in <a href=\"blockchain.info/api/blockchain_api\">https://blockchain.info/api/blockchain_api</a> (including /pushtx), except it runs on <a href=\"https://en.bitcoin.it/wiki/Testnet\">testnet3</a>, an alternative blockchain used for testing.\n" +
    "          </p>\n" +
    "        </blockquote>\n" +
    "        <blockquote>\n" +
    "          <p class=\"lead\">\n" +
    "            However, if you prefer a more reliable API, we recommended you to try our API.\n" +
    "          </p>\n" +
    "        </blockquote>\n" +
    "        <br>\n" +
    "        <div class=\"row text-center\">\n" +
    "          <a class=\"btn btn-success btn-lg\" href=\"/docs/tutorials\">\n" +
    "            Getting Started\n" +
    "          </a>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <br><br><br>\n" +
    "    <div class=\"row\">\n" +
    "      <!-- <h1 class='text-center'>Quick Start</h1> -->\n" +
    "      <div class=\"col-md-8 col-md-offset-2\">\n" +
    "        <blockquote>\n" +
    "          <p class=\"lead\">\n" +
    "            To access the Testnet3 Faucet, lift the API Rate Limit, and stay up to date, please leave your e-mail.\n" +
    "          </p>\n" +
    "        </blockquote>\n" +
    "        <form ng-submit=\"User.signUp(User.email)\">\n" +
    "          <div class=\"input-group\">\n" +
    "              <input\n" +
    "                class='h3 big-input'\n" +
    "                spellcheck=\"false\"\n" +
    "                type=\"email\"\n" +
    "                name=\"email\"\n" +
    "                ng-model=\"User.email\"\n" +
    "                ng-minlength=\"4\"\n" +
    "                required\n" +
    "                >\n" +
    "              <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-success btn-block btn-search\">\n" +
    "                  <span class=\"h4\">Sign Up</span>\n" +
    "                </button>\n" +
    "              </span>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "<br><br><br><br><br><br>\n"
  );


  $templateCache.put('/templates/test.html',
    "TEST PAGE\n" +
    "<div class=\"test\">\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"pull-right\">\n" +
    "  <span class='clip-copy' clip-copy=\"tester\">\n" +
    "    <i class=\"fa fa-copy\"></i>\n" +
    "  </span>\n" +
    "</div>\n"
  );

}]);
