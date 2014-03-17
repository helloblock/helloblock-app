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
    "        <td><a href=\"/blocks/{{transaction.blockHeight}}\">{{transaction.blockHeight}}</a></td>\n" +
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
    "          <div class=\"text-center\" ng-show=\"transaction.inputs[0].prevTxHash === null\">\n" +
    "            <br>\n" +
    "            <span class=\"h3\">NEWLY GENERATED COINS</span>\n" +
    "          </div>\n" +
    "          <table\n" +
    "          ng-repeat=\"i in transaction.inputs\"\n" +
    "          ng-show=\"i.prevTxHash !== null\"\n" +
    "          class=\"table table-bordered table-io\"\n" +
    "          ng-class=\"{'table-highlighted': transaction.nextTxinIndex === $index}\"\n" +
    "          >\n" +
    "          <tbody>\n" +
    "            <tr>\n" +
    "              <td>Address: </td>\n" +
    "              <td>\n" +
    "                <clipboard clip-copy=\"{{i.address}}\"></clipboard>\n" +
    "                <img\n" +
    "                ng-src=\"https://secure.gravatar.com/avatar/{{i.hash160}}?d=identicon&s=16\"\n" +
    "                width=\"16\">\n" +
    "                <span><a href=\"/addresses/{{i.address}}\">{{i.address}}</a></span>\n" +
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
    "              <td>PrevTxout Index: </td>\n" +
    "              <td>\n" +
    "                <span>\n" +
    "                  <a href=\"/transactions/{{i.prevTxHash}}?prevTxoutIndex={{i.prevTxoutIndex}}\">\n" +
    "                    {{i.prevTxoutIndex}}\n" +
    "                  </a>\n" +
    "                </span>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>\n" +
    "                Prev TxHash:\n" +
    "              </td>\n" +
    "              <td class=''>\n" +
    "                <span class=\"amount\">\n" +
    "                  <clipboard clip-copy=\"{{i.prevTxHash}}\"></clipboard>\n" +
    "                  <a href=\"/transactions/{{i.prevTxHash}}?prevTxoutIndex={{i.prevTxoutIndex}}\">\n" +
    "                    {{i.prevTxHash}}\n" +
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
    "        ng-class=\"{'table-highlighted': transaction.prevTxoutIndex === o.index}\">\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td>Output Index:</td>\n" +
    "            <td><span>{{o.index}}</span></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>Address: </td>\n" +
    "            <td>\n" +
    "              <clipboard clip-copy=\"{{o.address}}\"></clipboard>\n" +
    "              <img src=\"https://secure.gravatar.com/avatar/{{o.hash160}}?d=identicon&s=16\" width=\"16\">\n" +
    "              <span><a href=\"/addresses/{{o.address}}\">{{o.address}}</a></span>\n" +
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
    "          <tr>\n" +
    "            <td>NextTxIn Index: </td>\n" +
    "            <td>\n" +
    "              <span>\n" +
    "                <a href=\"/transactions/{{o.nextTxHash}}?nextTxinIndex={{o.nextTxinIndex}}\">\n" +
    "                  {{o.nextTxinIndex}}\n" +
    "                </a>\n" +
    "              </span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td>\n" +
    "              Next TxHash:\n" +
    "            </td>\n" +
    "            <td class=''>\n" +
    "              <span class=\"amount\" ng-show=\"o.nextTxHash\">\n" +
    "                <clipboard clip-copy=\"{{o.nextTxHash}}\"></clipboard>\n" +
    "                <a href=\"/transactions/{{o.nextTxHash}}?nextTxinIndex={{o.nextTxinIndex}}\">\n" +
    "                  {{o.nextTxHash}}\n" +
    "                </a>\n" +
    "              </span>\n" +
    "            </td>\n" +
    "          </tr>\n" +
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
    "        <a href=\"/transactions/{{tx.txHash}}\"> {{tx.txHash}}</a>\n" +
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
    "              <a href=\"/transactions/{{i.prevTxHash}}?prevTxoutIndex={{i.prevTxoutIndex}}\">\n" +
    "                n: {{i.prevTxoutIndex}}\n" +
    "              </a>\n" +
    "            </td>\n" +
    "            <td rowspan=\"2\" class='text-center'>\n" +
    "              <img ng-src=\"https://secure.gravatar.com/avatar/{{i.hash160}}?d=identicon&s=48\" width=\"48\">\n" +
    "            </td>\n" +
    "            <td>\n" +
    "              <span class=\"h6\">\n" +
    "                <clipboard clip-copy=\"{{i.address}}\"></clipboard>\n" +
    "                <a href=\"/addresses/{{i.address}}\">{{i.address}}</a>\n" +
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
    "                <a href=\"/addresses/{{o.address}}\">{{o.address}}</a>\n" +
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
    "              <a bind-once href=\"/addresses/{{address.base58}}\">\n" +
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
    "            <td>{{address.txsCount}}</td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><strong># Confirmed Transactions</strong></td>\n" +
    "            <td>{{address.confirmedTxsCount}}</td>\n" +
    "          </tr>\n" +
    "         <!--  <tr>\n" +
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
    "          </tr> -->\n" +
    "          <tr>\n" +
    "            <td><strong>Balance</strong></td>\n" +
    "            <td watch='true' to-btc=\"{{address.balance}}\"></td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <td><strong>Confirmed Balance</strong></td>\n" +
    "            <td watch='true' to-btc=\"{{address.confirmedBalance}}\"></td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br><br><br><br>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "  <tabset>\n" +
    "    <tab heading=\"All Transactions\" active=\"address.active === 'transactions' \">\n" +
    "      <br>\n" +
    "      <div infinite-scroll=\"loadMoreTransactions()\">\n" +
    "        <span ng-repeat=\"tx in address.transactions\">\n" +
    "          <div ng-include=\"'/templates/blockExplorer/_tx.html'\"></div>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "\n" +
    "    </tab>\n" +
    "    <tab heading=\"Unspent Outputs\" active=\"address.active === 'unspents' \">\n" +
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
    "        href=\"/blocks/{{block.index - 1}}\"\n" +
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
    "        href=\"/blocks/{{block.index + 1}}\"\n" +
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
    "        <td>{{block.txsCount}}</td>\n" +
    "      </tr>\n" +
    "      <!-- <tr>\n" +
    "        <td>Total Inputs: </td>\n" +
    "        <td to-btc=\"{{block.totalInputsValue}}\"></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Total Outputs: </td>\n" +
    "        <td to-btc=\"{{block.totalOutputsValue}}\"></td>\n" +
    "      </tr> -->\n" +
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
    "          <!-- <th class='text-center'><span class='h5 nowrap'>Block Hash</span></th> -->\n" +
    "          <th class='text-center'><span class='h5'>Block Height</span></th>\n" +
    "          <th class='text-center'><span class='h5'># Transactions</span></th>\n" +
    "          <th class='text-center'><span class='h5'>Time</span></th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "        <tr ng-repeat=\"block in blocks.latest\">\n" +
    "          <!-- <td>\n" +
    "            <a href=\"/blocks/{{block.blockHash}}\">{{block.blockHash}}</a>\n" +
    "          </td> -->\n" +
    "          <td class='text-center'>\n" +
    "            <a href=\"/blocks/{{block.blockHeight}}\">{{block.blockHeight}}</a>\n" +
    "          </td>\n" +
    "          <td class='text-center'>\n" +
    "            <span class='h6'>{{block.txsCount}}</span>\n" +
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
    "            <a href=\"/transactions/{{tx.txHash}}\">{{tx.txHash}}</a>\n" +
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
    "        PROPAGATE TRANSACTIONS [{{global.mode.toUpperCase()}}]\n" +
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
    "      <!-- <button class='btn btn-warning' ng-click=\"decodeHex()\">\n" +
    "        DECODE\n" +
    "      </button> -->\n" +
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
    "          <a href=\"/docs/ref\">\n" +
    "            <i class=\"fa fa-book\"></i>\n" +
    "            <span>Documentation</span>\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': global.isOnLinks(['latest', 'addresses', 'transactions', 'blocks', 'propagate'])}\">\n" +
    "          <a href=\"/latest\">\n" +
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
    "              <a href=\"{{global.baseUrl.mainnet}}/latest\">MAINNET</a>\n" +
    "            </li>\n" +
    "            <div class=\"divider\"></div>\n" +
    "            <li>\n" +
    "              <a href=\"{{global.baseUrl.testnet}}/latest\">TESTNET</a>\n" +
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
    "          <a href=\"/latest\">\n" +
    "            Latest\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': selected == 'addresses'}\">\n" +
    "          <a href=\"/addresses\">\n" +
    "            Addresses\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': selected == 'transactions'}\">\n" +
    "          <a href=\"/transactions\">\n" +
    "            Transactions\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': selected == 'blocks'}\">\n" +
    "          <a href=\"/blocks\">\n" +
    "            Blocks\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{'active': selected == 'propagate'}\">\n" +
    "          <a href=\"/propagate\">\n" +
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


  $templateCache.put('/templates/docs/ref/addresses/batch-transactions/_curl.html',
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
    "curl https://testnet.helloblock.io/v1/addresses/transactions?addresses=<span class='text-primary'>mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L</span>&addresses=<span class='text-primary'>mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo</span>&limit=1\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"transactions\": [\n" +
    "      {\n" +
    "        \"txHash\": \"001ca8f4519037aa9224ab0ea9944f6e538af232d9ed3c806df8c31c05c704e7\",\n" +
    "        \"version\": 1,\n" +
    "        \"locktime\": 0,\n" +
    "        \"size\": 439,\n" +
    "        \"blockHash\": \"0000000001ad40d52ababc4a24fccd810c91f9a39c3afa72955b9a8be342371f\",\n" +
    "        \"blockHeight\": 190560,\n" +
    "        \"blockTime\": 1392985961,\n" +
    "        \"estimatedTxTime\": 1392985961,\n" +
    "        \"confirmations\": 14598,\n" +
    "        \"inputsCount\": 2,\n" +
    "        \"outputsCount\": 2,\n" +
    "        \"inputs\": [\n" +
    "          {\n" +
    "            \"prevTxoutIndex\": 1,\n" +
    "            \"prevTxHash\": \"001ca8f4519037aa9224ab0ea9944f6e538af232d9ed3c806df8c31c05c704e7\",\n" +
    "            \"value\": 100000,\n" +
    "            \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\",\n" +
    "            \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\",\n" +
    "            \"scriptSig\": \"4930460221009b4f454cc827e526c7dd4e8e9290cc4e238b73dcf6297cc18084bd18c25a882f022100d3aa80a050f0f158d2c59eec53a36aa17bf05d4a4383e6a71c36ea6f4e2f774e0141041f6222232963dc66e40f008bae27738966770a8d34d687e015b66e43e49ace2511ca6bce0df1beef080c174c6c0cf8609d51898c9e7551df0721d94758133438\"\n" +
    "          },\n" +
    "          {\n" +
    "            \"prevTxoutIndex\": 1,\n" +
    "            \"prevTxHash\": \"001ca8f4519037aa9224ab0ea9944f6e538af232d9ed3c806df8c31c05c704e7\",\n" +
    "            \"value\": 100000,\n" +
    "            \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\",\n" +
    "            \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\",\n" +
    "            \"scriptSig\": \"48304502207b6ef61a49677070a75aceb365ac6f5b5db67b9e75e1eb1f8a0a7c594d65e79e0221008b5d9e07e1c3a39109d7baffee1aba9f867833c8ca8fb825bb185236563e15510141041f6222232963dc66e40f008bae27738966770a8d34d687e015b66e43e49ace2511ca6bce0df1beef080c174c6c0cf8609d51898c9e7551df0721d94758133438\"\n" +
    "          }\n" +
    "        ],\n" +
    "        \"outputs\": [\n" +
    "          {\n" +
    "            \"index\": 0,\n" +
    "            \"value\": 100000,\n" +
    "            \"scriptPubKey\": \"76a914e8a86de5d3fc6daa28a17ec1f933146f6107998388ac\",\n" +
    "            \"address\": \"n2j8qELbiG5Ay3hvj6K6hbSJKqaVLHD2eA\",\n" +
    "            \"hash160\": \"e8a86de5d3fc6daa28a17ec1f933146f61079983\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": false,\n" +
    "            \"nextTxHash\": null,\n" +
    "            \"nextTxinIndex\": null\n" +
    "          },\n" +
    "          {\n" +
    "            \"index\": 1,\n" +
    "            \"value\": 90000,\n" +
    "            \"scriptPubKey\": \"76a914652c453e3f8768d6d6e1f2985cb8939db91a4e0588ac\",\n" +
    "            \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\",\n" +
    "            \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": true,\n" +
    "            \"nextTxHash\": \"ca6c1ff48e6ee5b04b0fc4dc502d263ca32767914a3831719b08a1780bd5a62f\",\n" +
    "            \"nextTxinIndex\": 0\n" +
    "          }\n" +
    "        ],\n" +
    "        \"totalInputsValue\": 200000,\n" +
    "        \"totalOutputsValue\": 190000,\n" +
    "        \"fees\": 10000,\n" +
    "        \"estimatedTxDirection\": \"outgoing\",\n" +
    "        \"estimatedTxValue\": -100000\n" +
    "      }\n" +
    "    ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/batch-transactions/_description.html',
    "<h3>Get Batch Transactions</h3>\n" +
    "<br>\n" +
    "<p>Gets and returns transactions for multiple addresses.</p>\n" +
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
    "      <td>\n" +
    "        <em>strings</em>\n" +
    "        <div>repeat for multiple</div>\n" +
    "      </td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>limit: </td>\n" +
    "      <td>10</td>\n" +
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
    "  Returns <em>Array</em> of Transaction Objects\n" +
    "</p>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/batch-transactions/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/batch-transactions/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/batch-unspents/_curl.html',
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
    "curl https://testnet.helloblock.io/v1/addresses/unspents?addresses=<span class='text-primary'>mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L</span>&addresses=<span class='text-primary'>mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo</span>&limit=2\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"unspents\": [\n" +
    "      {\n" +
    "        \"confirmations\": 2639,\n" +
    "        \"blockHeight\": 202518,\n" +
    "        \"txHash\": \"005cd997f92d11afc621b2eabdc5eea952d31da1cb27a05dc5e34d611bed1496\",\n" +
    "        \"index\": 0,\n" +
    "        \"scriptPubKey\": \"76a914652c453e3f8768d6d6e1f2985cb8939db91a4e0588ac\",\n" +
    "        \"txoutType\": \"pubkeyhash\",\n" +
    "        \"value\": 10000,\n" +
    "        \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\",\n" +
    "        \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\"\n" +
    "      },\n" +
    "      {\n" +
    "        \"confirmations\": 14726,\n" +
    "        \"blockHeight\": 190431,\n" +
    "        \"txHash\": \"06849aa080b61ad403f3d6ff5e53ee38a099ea0e53600ac1453375021e376e65\",\n" +
    "        \"index\": 0,\n" +
    "        \"scriptPubKey\": \"76a914a5319d469e1ddd9558bd558a50e95f74b3da58c988ac\",\n" +
    "        \"txoutType\": \"pubkeyhash\",\n" +
    "        \"value\": 10000,\n" +
    "        \"hash160\": \"a5319d469e1ddd9558bd558a50e95f74b3da58c9\",\n" +
    "        \"address\": \"mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L\"\n" +
    "      }\n" +
    "    ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/batch-unspents/_description.html',
    "<h3>Get Batch Unspent Outputs</h3>\n" +
    "<br>\n" +
    "<p>Gets and returns the unspent outputs for multiple addresses.</p>\n" +
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
    "      <td>\n" +
    "        <em>strings</em>\n" +
    "        <div>repeat for multiple</div>\n" +
    "      </td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>limit: </td>\n" +
    "      <td>10</td>\n" +
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
    "<p>\n" +
    "  Returns <em>Array</em> of Unspent Output Objects (as above)\n" +
    "</p>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/batch-unspents/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/batch-unspents/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/batch/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/addresses?addresses=<span class='text-primary'>&lt;address&gt;</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "curl https://testnet.helloblock.io/v1/addresses?addresses=<span class='text-primary'>mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L</span>&addresses=<span class='text-primary'>mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<!-- TODO: actual data -->\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"addresses\": [\n" +
    "      {\n" +
    "        \"balance\": 7059000,\n" +
    "        \"confirmedBalance\": 7059000,\n" +
    "        \"txsCount\": 320,\n" +
    "        \"confirmedTxsCount\": 320,\n" +
    "        \"address\": \"mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L\",\n" +
    "        \"hash160\": \"a5319d469e1ddd9558bd558a50e95f74b3da58c9\"\n" +
    "      },\n" +
    "      {\n" +
    "        \"balance\": 2034000,\n" +
    "        \"confirmedBalance\": 2034000,\n" +
    "        \"txsCount\": 367,\n" +
    "        \"confirmedTxsCount\": 367,\n" +
    "        \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\",\n" +
    "        \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\"\n" +
    "      }\n" +
    "    ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/batch/_description.html',
    "<h3>Get Batch Addresses</h3>\n" +
    "<br>\n" +
    "<p>Batch get multiple addresses.</p>\n" +
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
    "      <td>\n" +
    "        <em>strings</em>\n" +
    "        <div>\n" +
    "          Repeat for multiple addresses, e.g.\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          \"addresses=a&addresses=b&addresses=c\"\n" +
    "        </div>\n" +
    "      </td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Addresses</strong></p>\n" +
    "<p>\n" +
    "  Returns <em>array</em> of Address Objects (as above)\n" +
    "</p>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/batch/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/addresses/batch/_ruby.html',
    ""
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
    "GET https://testnet.helloblock.io/v1/addresses/<span class='text-primary'>&lt;address&gt;</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "curl https://testnet.helloblock.io/v1/addresses/<span class='text-primary'>mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<!-- TODO: actual data -->\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"address\": {\n" +
    "      \"balance\": 7059000,\n" +
    "      \"confirmedBalance\": 7059000,\n" +
    "      \"txsCount\": 320,\n" +
    "      \"confirmedTxsCount\": 320,\n" +
    "      \"address\": \"mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L\",\n" +
    "      \"hash160\": \"a5319d469e1ddd9558bd558a50e95f74b3da58c9\"\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/single/_description.html',
    "<h3>Get an Address</h3>\n" +
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
    "  </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Address</strong></p>\n" +
    "<table class=\"table table-bordered table-docs table-condensed\">\n" +
    "  <tbody>\n" +
    "    <tr>\n" +
    "      <td>balance: </td>\n" +
    "      <td>\n" +
    "        <em>integer</em>\n" +
    "        <div>\n" +
    "          includes unconfirmed transactions\n" +
    "        </div>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>confirmedBalance: </td>\n" +
    "      <td>\n" +
    "        <em>integer</em>\n" +
    "        <div>\n" +
    "          includes only confirmed transactions\n" +
    "        </div>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>txsCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>confirmedTxsCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <!-- <tr>\n" +
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
    "    </tr> -->\n" +
    "    <tr>\n" +
    "      <td>address: </td>\n" +
    "      <td><em>string</em> (base58)</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>hash160: </td>\n" +
    "      <td><em>string</em></td>\n" +
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
    "GET https://testnet.helloblock.io/v1/addresses/<span class='text-primary'>&lt;address&gt;</span>/transactions?param=value\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "curl https://testnet.helloblock.io/v1/addresses/<span class='text-primary'>mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L</span>/transactions?limit=1\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"transactions\": [\n" +
    "      {\n" +
    "        \"txHash\": \"006fe24861564c3399423a0a8d5591f03016e0060122e1d201d306883ebc2b80\",\n" +
    "        \"version\": 1,\n" +
    "        \"locktime\": 0,\n" +
    "        \"size\": 259,\n" +
    "        \"blockHash\": \"000000000025c3db547acf4aac57656a87aebb748a83f9aef79f51602d2e95e2\",\n" +
    "        \"blockHeight\": 183387,\n" +
    "        \"blockTime\": 1392802642,\n" +
    "        \"estimatedTxTime\": 1392802642,\n" +
    "        \"confirmations\": 21771,\n" +
    "        \"inputsCount\": 1,\n" +
    "        \"outputsCount\": 3,\n" +
    "        \"inputs\": [\n" +
    "          {\n" +
    "            \"prevTxoutIndex\": 2,\n" +
    "            \"prevTxHash\": \"006fe24861564c3399423a0a8d5591f03016e0060122e1d201d306883ebc2b80\",\n" +
    "            \"value\": 7603000,\n" +
    "            \"address\": \"mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L\",\n" +
    "            \"hash160\": \"a5319d469e1ddd9558bd558a50e95f74b3da58c9\",\n" +
    "            \"scriptSig\": \"473044022068154992ecf375a30f61c52c729b715690e0dee4842312762684fdcc0d0d7a730220762a72a4b9a563f96eff03dbfe48e7f66172205e352f8e5cd34d28e6f6ec29470121021690aa789aabc6acbc7309f626f4f3d32faf3b86620a9a3dae9fd689bc8b47c3\"\n" +
    "          }\n" +
    "        ],\n" +
    "        \"outputs\": [\n" +
    "          {\n" +
    "            \"index\": 0,\n" +
    "            \"value\": 5500,\n" +
    "            \"scriptPubKey\": \"76a9144c4f564549206c6f766520796f7520626162792088ac\",\n" +
    "            \"address\": \"mnUSh4g73n1CRJxQ86UaHHymszyG6AyyHG\",\n" +
    "            \"hash160\": \"4c4f564549206c6f766520796f75206261627920\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": false,\n" +
    "            \"nextTxHash\": null,\n" +
    "            \"nextTxinIndex\": null\n" +
    "          },\n" +
    "          {\n" +
    "            \"index\": 1,\n" +
    "            \"value\": 5500,\n" +
    "            \"scriptPubKey\": \"76a914666f72206576657200000000000000000000000088ac\",\n" +
    "            \"address\": \"mpraj1bhrSp7226HHpHuXnj1tZWJgaXKuy\",\n" +
    "            \"hash160\": \"666f722065766572000000000000000000000000\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": false,\n" +
    "            \"nextTxHash\": null,\n" +
    "            \"nextTxinIndex\": null\n" +
    "          },\n" +
    "          {\n" +
    "            \"index\": 2,\n" +
    "            \"value\": 7567000,\n" +
    "            \"scriptPubKey\": \"76a914a5319d469e1ddd9558bd558a50e95f74b3da58c988ac\",\n" +
    "            \"address\": \"mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L\",\n" +
    "            \"hash160\": \"a5319d469e1ddd9558bd558a50e95f74b3da58c9\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": true,\n" +
    "            \"nextTxHash\": \"2866c00dd63b014b3a260b7598427e793a234a148c35a33f180e93d1bd2c955e\",\n" +
    "            \"nextTxinIndex\": 0\n" +
    "          }\n" +
    "        ],\n" +
    "        \"totalInputsValue\": 7603000,\n" +
    "        \"totalOutputsValue\": 7578000,\n" +
    "        \"fees\": 25000,\n" +
    "        \"estimatedTxDirection\": \"outgoing\",\n" +
    "        \"estimatedTxValue\": -11000\n" +
    "      }\n" +
    "    ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/transactions/_description.html',
    "<h3>Get Transactions</h3>\n" +
    "<br>\n" +
    "<p>Gets and returns transactions for a given address.</p>\n" +
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
    "      <td>10</td>\n" +
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
    "      <td>outputs: </td>\n" +
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
    "          Relating to address given\n" +
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
    "          Relating to address given\n" +
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
    "GET https://testnet.helloblock.io/v1/addresses/<span class='text-primary'>&lt;address&gt;</span>/unspents?param=value\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "curl https://testnet.helloblock.io/v1/addresses/<span class='text-primary'>mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L</span>/unspents?limit=1\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"unspents\": [\n" +
    "      {\n" +
    "        \"confirmations\": 13824,\n" +
    "        \"blockHeight\": 190431,\n" +
    "        \"txHash\": \"06849aa080b61ad403f3d6ff5e53ee38a099ea0e53600ac1453375021e376e65\",\n" +
    "        \"index\": 0,\n" +
    "        \"scriptPubKey\": \"76a914a5319d469e1ddd9558bd558a50e95f74b3da58c988ac\",\n" +
    "        \"txoutType\": \"pubkeyhash\",\n" +
    "        \"value\": 10000,\n" +
    "        \"hash160\": \"a5319d469e1ddd9558bd558a50e95f74b3da58c9\",\n" +
    "        \"address\": \"mvaRDyLUeF4CP7Lu9umbU3FxehyC5nUz3L\"\n" +
    "      }\n" +
    "    ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/addresses/unspents/_description.html',
    "<h3>Get Unspent Outputs</h3>\n" +
    "<br>\n" +
    "<p>Gets and returns the unspent outputs for a given address.</p>\n" +
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
    "      <td>10</td>\n" +
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
    "      <td>prevTxHash: </td>\n" +
    "      <td><em>string</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>prevTxoutIndex: </td>\n" +
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
    "curl https://testnet.helloblock.io/v1/blocks/latest?limit=1\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"blocks\": [\n" +
    "      {\n" +
    "        \"blockHeight\": 204255,\n" +
    "        \"blockHash\": \"0000000058024389ca3df9cdefa3aefe3809cd99574b262ff26bfb7aa176d857\",\n" +
    "        \"blockTime\": 1394454645,\n" +
    "        \"previousBlockHash\": \"0000000057b2a6082dafae124fee74f3aedd4f52dd8713b7af9b4e3eb981b30b\",\n" +
    "        \"bits\": 486604799,\n" +
    "        \"version\": 2,\n" +
    "        \"merkleRootHash\": \"8867986858331ab2a8a3dd0dab445bd024318e1ae36947886927dd24f0fb8d3f\",\n" +
    "        \"nonce\": 1553646336,\n" +
    "        \"txsCount\": 5,\n" +
    "        \"confirmations\": 0\n" +
    "      }\n" +
    "    ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/blocks/latest/_description.html',
    "<h3>Get latest Blocks</h3>\n" +
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
    "      <td>10</td>\n" +
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
    "GET https://testnet.helloblock.io/v1/blocks/<span class='text-primary'>&lt;blockId&gt;</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "curl https://testnet.helloblock.io/v1/blocks/<span class='text-primary'>123123</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"block\": {\n" +
    "      \"blockHeight\": 123123,\n" +
    "      \"blockHash\": \"00000000002b652559550d2829249026aec39b7b84f2c7febadf0250b93ee3c1\",\n" +
    "      \"blockTime\": 1382046624,\n" +
    "      \"previousBlockHash\": \"000000000025896a3409c57493aa7020a4cc24232a8ee9da10cbe857953d27bd\",\n" +
    "      \"bits\": 456643328,\n" +
    "      \"version\": 2,\n" +
    "      \"merkleRootHash\": \"82203172bab3f9b90543e98eef4acdf5ab9daf3b6df80806092f9715fe72ba63\",\n" +
    "      \"nonce\": 4210027488,\n" +
    "      \"txsCount\": 3,\n" +
    "      \"confirmations\": 81132\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/blocks/single/_description.html',
    "<h3>Get a Block</h3>\n" +
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
    "  </tbody>\n" +
    "</table>\n" +
    "<br>\n" +
    "<p><strong>Response Attributes for Block</strong></p>\n" +
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
    "    <!-- <tr>\n" +
    "      <td>totalInputsValue: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>totalOutputsValue: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr> -->\n" +
    "    <tr>\n" +
    "      <td>txsCount: </td>\n" +
    "      <td><em>integer</em></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>confirmations: </td>\n" +
    "      <td><em>integer</em></td>\n" +
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


  $templateCache.put('/templates/docs/ref/blocks/transactions/_curl.html',
    "<br><br><br><br><br>\n" +
    "<div class=\"h5 title\">DEFINITION</div>\n" +
    "<pre>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "GET https://testnet.helloblock.io/v1/blocks/<span class='text-primary'>&lt;blockId&gt;</span>/transactions?param=value\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class=\"curl\">\n" +
    "  <code class=\"bash\" hljs>\n" +
    "curl https://testnet.helloblock.io/v1/blocks/<span class='text-primary'>123123</span>/transactions?limit=1\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"transactions\": [\n" +
    "      {\n" +
    "        \"txHash\": \"baae34397881132faaeff32c57c92963596a1f8f7a38477961eafc6e737ce365\",\n" +
    "        \"version\": 1,\n" +
    "        \"locktime\": 0,\n" +
    "        \"size\": 138,\n" +
    "        \"blockHash\": \"00000000002b652559550d2829249026aec39b7b84f2c7febadf0250b93ee3c1\",\n" +
    "        \"blockHeight\": 123123,\n" +
    "        \"blockTime\": 1382046624,\n" +
    "        \"estimatedTxTime\": 1382046624,\n" +
    "        \"confirmations\": 82035,\n" +
    "        \"inputsCount\": 1,\n" +
    "        \"outputsCount\": 2,\n" +
    "        \"inputs\": [\n" +
    "          {\n" +
    "            \"prevTxoutIndex\": -1,\n" +
    "            \"prevTxHash\": \"baae34397881132faaeff32c57c92963596a1f8f7a38477961eafc6e737ce365\",\n" +
    "            \"value\": 0,\n" +
    "            \"address\": null,\n" +
    "            \"hash160\": null,\n" +
    "            \"scriptSig\": \"03f3e0010652605ba00b000000000033020000\"\n" +
    "          }\n" +
    "        ],\n" +
    "        \"outputs\": [\n" +
    "          {\n" +
    "            \"index\": 0,\n" +
    "            \"value\": 4925026471,\n" +
    "            \"scriptPubKey\": \"76a91495006ae154ef272450cbc2317d12950a02470e3788ac\",\n" +
    "            \"address\": \"mu6oUeNmEqQJ31cBrDrpDuwfQCAvwCxn6H\",\n" +
    "            \"hash160\": \"95006ae154ef272450cbc2317d12950a02470e37\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": false,\n" +
    "            \"nextTxHash\": null,\n" +
    "            \"nextTxinIndex\": null\n" +
    "          },\n" +
    "          {\n" +
    "            \"index\": 1,\n" +
    "            \"value\": 74983529,\n" +
    "            \"scriptPubKey\": \"76a91495006ae154ef272450cbc2317d12950a02470e3788ac\",\n" +
    "            \"address\": \"mu6oUeNmEqQJ31cBrDrpDuwfQCAvwCxn6H\",\n" +
    "            \"hash160\": \"95006ae154ef272450cbc2317d12950a02470e37\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": false,\n" +
    "            \"nextTxHash\": null,\n" +
    "            \"nextTxinIndex\": null\n" +
    "          }\n" +
    "        ],\n" +
    "        \"totalInputsValue\": 0,\n" +
    "        \"totalOutputsValue\": 5000010000,\n" +
    "        \"fees\": 0\n" +
    "      }\n" +
    "    ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/blocks/transactions/_description.html',
    "<h3>Get Transactions</h3>\n" +
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
    "      <td>10</td>\n" +
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
    "<br>\n" +
    "<p><strong>Response Attributes for Transactions</strong></p>\n" +
    "<p>\n" +
    "  Returns <em>array</em> of Transaction Objects (as above)\n" +
    "</p>\n"
  );


  $templateCache.put('/templates/docs/ref/blocks/transactions/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/blocks/transactions/_ruby.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/faucet/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/faucet/intro/_description.html',
    "<h2>Faucet</h2>\n" +
    "<br>\n" +
    "<p>\n" +
    "  Free Bitcoins (testnet3) to make writing tests easy.\n" +
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
    "curl https://testnet.helloblock.io/v1/faucet?type=1\n" +
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
    "      \"txoutType\": \"pubkeyhash\",\n" +
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
    "<h3>Get Unspents</h3>\n" +
    "<br>\n" +
    "<p>\n" +
    "  Gets a unique key pair, pre-loaded with unspent outputs. Particularly useful in \"before each\" hooks.\n" +
    "</p>\n" +
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
    "      <td>\n" +
    "        <em>integer</em>\n" +
    "        <div>(1, 2 or 3)</div>\n" +
    "      </td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "<br>\n" +
    "<p><strong>Request Parameters | Faucet Types</strong></p>\n" +
    "<table class=\"table table-bordered table-docs\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <td>Type</td>\n" +
    "      <td>Preloaded Unspents Outputs</td>\n" +
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
    "</table>\n" +
    "<br>\n" +
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
    "        Array of <em>Unspent Objects</em>\n" +
    "      </td>\n" +
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
    "curl -X POST https://testnet.helloblock.io/v1/faucet/withdrawal \\\n" +
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
    "<p>Withdraws of Bitcoins (testnet3) from Faucet.</p>\n" +
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
    "      <td>(max: 1,000,000)</td>\n" +
    "      <td>\n" +
    "        <em>integer</em>\n" +
    "        <div>satoshis</div>\n" +
    "      </td>\n" +
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
    "npm install helloblock-js --save\n" +
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
    "      \"attribute\" : \"Description\"\n" +
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


  $templateCache.put('/templates/docs/ref/socket/intro/_curl.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/socket/intro/_description.html',
    "<h2>Socket</h2>\n" +
    "<br>\n" +
    "<h3>Docs coming soon ...</h3>\n" +
    "<br>\n" +
    "<br>\n"
  );


  $templateCache.put('/templates/docs/ref/socket/intro/_nodejs.html',
    ""
  );


  $templateCache.put('/templates/docs/ref/socket/intro/_ruby.html',
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
    "curl https://testnet.helloblock.io/v1/transactions?txHashes=<span class='text-primary'>6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3</span>&txHashes=<span class='text-primary'>770e6e4c66fc61fb523e5aefe11780b26c8473638e7065ca726a6492ab7f6345</span>&txHashes=<span class='text-primary'>47bf46f92384002dc008696dac3437a2ca4a2696c21a3f6d1d789513e7b9a3f0</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"transactions\": [\n" +
    "      {\n" +
    "        \"txHash\": \"47bf46f92384002dc008696dac3437a2ca4a2696c21a3f6d1d789513e7b9a3f0\",\n" +
    "        \"version\": 1,\n" +
    "        \"locktime\": 0,\n" +
    "        \"size\": 376,\n" +
    "        \"blockHash\": \"00000000ba5b52e73bced6159bbd67602d0108816f4eaad8c669c4a78132c254\",\n" +
    "        \"blockHeight\": 155064,\n" +
    "        \"blockTime\": 1388685039,\n" +
    "        \"estimatedTxTime\": 1388685039,\n" +
    "        \"confirmations\": 50094,\n" +
    "        \"inputsCount\": 2,\n" +
    "        \"outputsCount\": 2,\n" +
    "        \"inputs\": [\n" +
    "          {\n" +
    "            \"prevTxoutIndex\": 1,\n" +
    "            \"prevTxHash\": \"47bf46f92384002dc008696dac3437a2ca4a2696c21a3f6d1d789513e7b9a3f0\",\n" +
    "            \"value\": 100000,\n" +
    "            \"address\": \"mk1caepuZCUNELK7P1t8cP8GtqZPcdzibr\",\n" +
    "            \"hash160\": \"314c1c19a662147ebafee5841e10b629f0a680ef\",\n" +
    "            \"scriptSig\": \"493046022100bce7fe3cc1120f524af14ff157c9558b218e2c7e1f9722955d7bd34d31ccadca022100f4aa43e73a64e5aeceeaf237c94ed7e4b478d64241c640028067393bd2688464012103ba3fa2f1d35c2d8acf7a66f997a140e8d2be69dc0d054a26b46c2f1d50b2366a\"\n" +
    "          },\n" +
    "          {\n" +
    "            \"prevTxoutIndex\": 1,\n" +
    "            \"prevTxHash\": \"47bf46f92384002dc008696dac3437a2ca4a2696c21a3f6d1d789513e7b9a3f0\",\n" +
    "            \"value\": 1030397,\n" +
    "            \"address\": \"mnmZ2hevsK1pEnpCtywYH1Sn1qKXi9DRGi\",\n" +
    "            \"hash160\": \"4f8bb314083164c857176c5ff6f29d14eb8f78a9\",\n" +
    "            \"scriptSig\": \"493046022100bf9d8c0e0b470eff1721e4c0afadb5d7d28f2b68a9f3a315399ebc61bca7c0c3022100b30be2ea458f34b7e7a91845ac437a528f6444b85eb2fe0f2adc8022c59d133a012102088960746782c504b30f39ab8e02f5a0360c2b9f392091f7a46246f0fe18a72d\"\n" +
    "          }\n" +
    "        ],\n" +
    "        \"outputs\": [\n" +
    "          {\n" +
    "            \"index\": 0,\n" +
    "            \"value\": 1020397,\n" +
    "            \"scriptPubKey\": \"76a9143488c0786a4cc76c59dc509654831ba5b34a079988ac\",\n" +
    "            \"address\": \"mkJjFiLGTTZxc9gynVHZ3nam17aaQdZU75\",\n" +
    "            \"hash160\": \"3488c0786a4cc76c59dc509654831ba5b34a0799\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": true,\n" +
    "            \"nextTxHash\": \"d17e1b9e2a6e044ed3d9eeb0600e0de3f4107052c891ce86802aaf60f4bdebf1\",\n" +
    "            \"nextTxinIndex\": 1\n" +
    "          },\n" +
    "          {\n" +
    "            \"index\": 1,\n" +
    "            \"value\": 100000,\n" +
    "            \"scriptPubKey\": \"76a914dfcb6c48e49b7a6d9d4f51e174f587a9b8ae33aa88ac\",\n" +
    "            \"address\": \"n1vGfugd2W27SkG5TZiWpmDzQrvtxAgFJw\",\n" +
    "            \"hash160\": \"dfcb6c48e49b7a6d9d4f51e174f587a9b8ae33aa\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": true,\n" +
    "            \"nextTxHash\": \"b0abcac31a9f7b7a0bcad9eff4adaedd479c0d6c1911c901ecb626372e6b0e9e\",\n" +
    "            \"nextTxinIndex\": 1\n" +
    "          }\n" +
    "        ],\n" +
    "        \"totalInputsValue\": 1130397,\n" +
    "        \"totalOutputsValue\": 1120397,\n" +
    "        \"fees\": 10000\n" +
    "      },\n" +
    "      ...\n" +
    "    ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/batch/_description.html',
    "<h3>Get Batch Transactions</h3>\n" +
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
    "        <em>strings</em>\n" +
    "        <div>\n" +
    "          Repeat for multiple transactions, e.g.\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          \"txHashes=a&txHashes=b&txHashes=c\"\n" +
    "        </div>\n" +
    "      </td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
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
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class='curl'>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "curl https://testnet.helloblock.io/v1/transactions/latest?limit=5\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<br>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "... as above\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/transactions/latest/_description.html',
    "<h3>Get latest Transactions</h3>\n" +
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
    "      <td>10</td>\n" +
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
    "curl -X POST https://testnet.helloblock.io/v1/transactions \\\n" +
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
    "GET https://testnet.helloblock.io/v1/transactions/<span class='text-primary'>&lt;txHash&gt;</span>\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE REQUEST</div>\n" +
    "<pre class='curl'>\n" +
    "  <code class=\"bash\" hljs>\n" +
    "curl https://testnet.helloblock.io/v1/transactions/<span class='text-primary'>2542cd64e02d902975dc6e2e97797ceec5a84e8597c80d22a9e2dbd16e748738</span>\n" +
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
    "      \"locktime\": 0,\n" +
    "      \"size\": 226,\n" +
    "      \"blockHash\": \"00000000c9b0330dd0d02607962a37e0010644b060da244189ee0632fb851c89\",\n" +
    "      \"blockHeight\": 154810,\n" +
    "      \"blockTime\": 1388393306,\n" +
    "      \"estimatedTxTime\": 1388393306,\n" +
    "      \"confirmations\": 50348,\n" +
    "      \"inputsCount\": 1,\n" +
    "      \"outputsCount\": 2,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"prevTxoutIndex\": 0,\n" +
    "          \"prevTxHash\": \"2542cd64e02d902975dc6e2e97797ceec5a84e8597c80d22a9e2dbd16e748738\",\n" +
    "          \"value\": 53022177768,\n" +
    "          \"address\": \"mjswyggXrNJKdb1PHEfqrFxyefwFnn1q68\",\n" +
    "          \"hash160\": \"2fd8f955587181fdf2caded0d41c8f52c084cee4\",\n" +
    "          \"scriptSig\": \"483045022100cc3a4f04c04b3aa6c4c98632f72641112e027a0f2280351e5722449c658d4a6c0220074f0537f668d4049c7b0da91486d6d83a2f37a60512a1771aedc35c97f0e92b0121038708f0be6ec42ff5788c5cd51c87f245538c1ecf890c12774fe006b55797c114\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"index\": 0,\n" +
    "          \"value\": 46970000,\n" +
    "          \"scriptPubKey\": \"76a9144465358b1c07d001a49216c466b6e8de5c708d9988ac\",\n" +
    "          \"address\": \"mmkbVEWhehm6mKUgV36K6oWX4BCZcp5by3\",\n" +
    "          \"hash160\": \"4465358b1c07d001a49216c466b6e8de5c708d99\",\n" +
    "          \"txoutType\": \"pubkeyhash\",\n" +
    "          \"spent\": false,\n" +
    "          \"nextTxHash\": null,\n" +
    "          \"nextTxinIndex\": null\n" +
    "        },\n" +
    "        {\n" +
    "          \"index\": 1,\n" +
    "          \"value\": 52975207768,\n" +
    "          \"scriptPubKey\": \"76a9146a0d58b53a6b6aef32d5907e237ad57e6d84d0d688ac\",\n" +
    "          \"address\": \"mqBhuiixrkwypkjNHFwSNYiFEtAiDr54gp\",\n" +
    "          \"hash160\": \"6a0d58b53a6b6aef32d5907e237ad57e6d84d0d6\",\n" +
    "          \"txoutType\": \"pubkeyhash\",\n" +
    "          \"spent\": true,\n" +
    "          \"nextTxHash\": \"af9c827f15a57b6268bb5978888e4473ed68107f7f0ca9004dec238cad4a284a\",\n" +
    "          \"nextTxinIndex\": 0\n" +
    "        }\n" +
    "      ],\n" +
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
    "<h3>Get a Transaction</h3>\n" +
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
    "              <td>prevTxoutIndex</td>\n" +
    "              <td><em>integer</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>prevTxHash</td>\n" +
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
    "            <tr>\n" +
    "              <td>spent</td>\n" +
    "              <td><em>boolean</em></td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>nextTxHash</td>\n" +
    "              <td>\n" +
    "                <em>string || null</em>\n" +
    "                <div>\n" +
    "                  Returns the Tx Hash of where output is spent\n" +
    "                </div>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>nextTxinIndex</td>\n" +
    "              <td>\n" +
    "                <em>integer</em>\n" +
    "                <div>\n" +
    "                  Returns the Tx Input Index of where output is spent\n" +
    "                </div>\n" +
    "              </td>\n" +
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
    "curl https://testnet.helloblock.io/v1/wallet?&addresses=<span class='text-primary'>mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo</span>&addresses=<span class='text-primary'>mvANEVQRsAC7xHt4GW2iSsJwUSMgkGX2k3</span>&transactions=true&unspents=true&limit=1\n" +
    "  </code>\n" +
    "</pre>\n" +
    "<div class=\"h5 title\">EXAMPLE RESPONSE</div>\n" +
    "<pre>\n" +
    "  <code class=\"javascript\" hljs>\n" +
    "{\n" +
    "  \"status\": \"success\",\n" +
    "  \"data\": {\n" +
    "    \"summary\": {\n" +
    "      \"balance\": 316333265,\n" +
    "      \"confirmedBalance\": 316333265,\n" +
    "      \"txsCount\": 384,\n" +
    "      \"confirmedTxsCount\": 384\n" +
    "    },\n" +
    "    \"addresses\": [\n" +
    "      {\n" +
    "        \"balance\": 316333265,\n" +
    "        \"confirmedBalance\": 316333265,\n" +
    "        \"txsCount\": 382,\n" +
    "        \"confirmedTxsCount\": 382,\n" +
    "        \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\",\n" +
    "        \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\"\n" +
    "      },\n" +
    "      {\n" +
    "        \"balance\": 0,\n" +
    "        \"confirmedBalance\": 0,\n" +
    "        \"txsCount\": 2,\n" +
    "        \"confirmedTxsCount\": 2,\n" +
    "        \"address\": \"mvANEVQRsAC7xHt4GW2iSsJwUSMgkGX2k3\",\n" +
    "        \"hash160\": \"a0a5226c2e376c929d800a070399e5a3d0277c6e\"\n" +
    "      }\n" +
    "    ],\n" +
    "    \"unspents\": [\n" +
    "      {\n" +
    "        \"confirmations\": 2640,\n" +
    "        \"blockHeight\": 202518,\n" +
    "        \"txHash\": \"005cd997f92d11afc621b2eabdc5eea952d31da1cb27a05dc5e34d611bed1496\",\n" +
    "        \"index\": 0,\n" +
    "        \"scriptPubKey\": \"76a914652c453e3f8768d6d6e1f2985cb8939db91a4e0588ac\",\n" +
    "        \"txoutType\": \"pubkeyhash\",\n" +
    "        \"value\": 10000,\n" +
    "        \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\",\n" +
    "        \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\"\n" +
    "      }\n" +
    "    ],\n" +
    "    \"transactions\": [\n" +
    "      {\n" +
    "        \"txHash\": \"001ca8f4519037aa9224ab0ea9944f6e538af232d9ed3c806df8c31c05c704e7\",\n" +
    "        \"version\": 1,\n" +
    "        \"locktime\": 0,\n" +
    "        \"size\": 439,\n" +
    "        \"blockHash\": \"0000000001ad40d52ababc4a24fccd810c91f9a39c3afa72955b9a8be342371f\",\n" +
    "        \"blockHeight\": 190560,\n" +
    "        \"blockTime\": 1392985961,\n" +
    "        \"estimatedTxTime\": 1392985961,\n" +
    "        \"confirmations\": 14598,\n" +
    "        \"inputsCount\": 2,\n" +
    "        \"outputsCount\": 2,\n" +
    "        \"inputs\": [\n" +
    "          {\n" +
    "            \"prevTxoutIndex\": 1,\n" +
    "            \"prevTxHash\": \"001ca8f4519037aa9224ab0ea9944f6e538af232d9ed3c806df8c31c05c704e7\",\n" +
    "            \"value\": 100000,\n" +
    "            \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\",\n" +
    "            \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\",\n" +
    "            \"scriptSig\": \"4930460221009b4f454cc827e526c7dd4e8e9290cc4e238b73dcf6297cc18084bd18c25a882f022100d3aa80a050f0f158d2c59eec53a36aa17bf05d4a4383e6a71c36ea6f4e2f774e0141041f6222232963dc66e40f008bae27738966770a8d34d687e015b66e43e49ace2511ca6bce0df1beef080c174c6c0cf8609d51898c9e7551df0721d94758133438\"\n" +
    "          },\n" +
    "          {\n" +
    "            \"prevTxoutIndex\": 1,\n" +
    "            \"prevTxHash\": \"001ca8f4519037aa9224ab0ea9944f6e538af232d9ed3c806df8c31c05c704e7\",\n" +
    "            \"value\": 100000,\n" +
    "            \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\",\n" +
    "            \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\",\n" +
    "            \"scriptSig\": \"48304502207b6ef61a49677070a75aceb365ac6f5b5db67b9e75e1eb1f8a0a7c594d65e79e0221008b5d9e07e1c3a39109d7baffee1aba9f867833c8ca8fb825bb185236563e15510141041f6222232963dc66e40f008bae27738966770a8d34d687e015b66e43e49ace2511ca6bce0df1beef080c174c6c0cf8609d51898c9e7551df0721d94758133438\"\n" +
    "          }\n" +
    "        ],\n" +
    "        \"outputs\": [\n" +
    "          {\n" +
    "            \"index\": 0,\n" +
    "            \"value\": 100000,\n" +
    "            \"scriptPubKey\": \"76a914e8a86de5d3fc6daa28a17ec1f933146f6107998388ac\",\n" +
    "            \"address\": \"n2j8qELbiG5Ay3hvj6K6hbSJKqaVLHD2eA\",\n" +
    "            \"hash160\": \"e8a86de5d3fc6daa28a17ec1f933146f61079983\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": false,\n" +
    "            \"nextTxHash\": null,\n" +
    "            \"nextTxinIndex\": null\n" +
    "          },\n" +
    "          {\n" +
    "            \"index\": 1,\n" +
    "            \"value\": 90000,\n" +
    "            \"scriptPubKey\": \"76a914652c453e3f8768d6d6e1f2985cb8939db91a4e0588ac\",\n" +
    "            \"address\": \"mpjuaPusdVC5cKvVYCFX94bJX1SNUY8EJo\",\n" +
    "            \"hash160\": \"652c453e3f8768d6d6e1f2985cb8939db91a4e05\",\n" +
    "            \"txoutType\": \"pubkeyhash\",\n" +
    "            \"spent\": true,\n" +
    "            \"nextTxHash\": \"ca6c1ff48e6ee5b04b0fc4dc502d263ca32767914a3831719b08a1780bd5a62f\",\n" +
    "            \"nextTxinIndex\": 0\n" +
    "          }\n" +
    "        ],\n" +
    "        \"totalInputsValue\": 200000,\n" +
    "        \"totalOutputsValue\": 190000,\n" +
    "        \"fees\": 10000,\n" +
    "        \"estimatedTxDirection\": \"outgoing\",\n" +
    "        \"estimatedTxValue\": -100000\n" +
    "      }\n" +
    "    ]\n" +
    "  }\n" +
    "}\n" +
    "  </code>\n" +
    "</pre>\n"
  );


  $templateCache.put('/templates/docs/ref/wallet/batch/_description.html',
    "<h3>Get Wallet</h3>\n" +
    "<br>\n" +
    "<p>Gets and returns addresses, transactions, unspents for multiple addresses.</p>\n" +
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
    "      <td>\n" +
    "        <em>array</em> of <em>strings</em>\n" +
    "        <div>repeat for multiple addresses</div>\n" +
    "      </td>\n" +
    "      <td><span class='label label-primary'>REQUIRED</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>transactions: </td>\n" +
    "      <td>false</td>\n" +
    "      <td><em>boolean</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>unspents: </td>\n" +
    "      <td>false</td>\n" +
    "      <td><em>boolean</em></td>\n" +
    "      <td><span class='label label-warning'>OPTIONAL</span></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>limit: </td>\n" +
    "      <td>10</td>\n" +
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
    "              <td>balance</td>\n" +
    "              <td>\n" +
    "                <em>integer</em>\n" +
    "                <div>\n" +
    "                  balance (incl. unconfirmed) for all addresses\n" +
    "                </div>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>confirmedBalance</td>\n" +
    "              <td>\n" +
    "                <em>integer</em>\n" +
    "                <div>\n" +
    "                  confirmedBalance for all addresses\n" +
    "                </div>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>txsCount</td>\n" +
    "              <td>\n" +
    "                <em>integer</em>\n" +
    "                <div>\n" +
    "                  txsCount for all addresses\n" +
    "                </div>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <tr>\n" +
    "              <td>confirmedTxsCount</td>\n" +
    "              <td>\n" +
    "                <em>integer</em>\n" +
    "                <div>\n" +
    "                  confirmedTxsCount for all addresses\n" +
    "                </div>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            <!-- <tr>\n" +
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
    "            </tr> -->\n" +
    "          </tbody>\n" +
    "        </table>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>addresses: </td>\n" +
    "      <td><em>array</em> of <em>Address Objects</em> for all addresses</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>transactions: </td>\n" +
    "      <td><em>array</em> of <em>Transaction Objects</em> for all addresses</td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <td>unspents: </td>\n" +
    "      <td><em>array</em> of <em>Unspent Objects</em> for all addresses</td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "<br><br>\n"
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
    "  Convenience endpoint for batch data commonly queried for.\n" +
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
    "      <br>\n" +
    "      <h1 class='main-title text-center white'>\n" +
    "        <strong>\n" +
    "          Focus on building Bitcoin apps, not infrastructure.\n" +
    "        </strong>\n" +
    "      </h1>\n" +
    "      <br>\n" +
    "      <h2 class='text-center white'>\n" +
    "        <span>\n" +
    "          Get started with the Blockchain Data API\n" +
    "        </span>\n" +
    "        <a class=\"btn btn-success\" href=\"/docs/ref\">\n" +
    "          <span class='h4'>\n" +
    "            <em>Go to Docs</em>\n" +
    "          </span>\n" +
    "        </a>\n" +
    "      </h2>\n" +
    "      <br><br>\n" +
    "      <div class=\"row\">\n" +
    "        <form ng-submit=\"bigSearch.query(query)\">\n" +
    "          <div class=\"container\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <input\n" +
    "                class='h3 big-input'\n" +
    "                spellcheck=\"false\"\n" +
    "                ng-model=\"query\"\n" +
    "                placeholder=\"Search for any address, transaction hash or block height\">\n" +
    "              <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-success btn-block btn-search\">\n" +
    "                  <span class=\"h2\">SEARCH</span>\n" +
    "                </button>\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "      <br><br>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"feature col-md-4 text-center\">\n" +
    "        <br>\n" +
    "        <i class=\"fa fa-wrench fa-4x\"></i>\n" +
    "        <h2>\n" +
    "          Built for Developers\n" +
    "        </h2>\n" +
    "        <p class='lead lead-smaller'>\n" +
    "          HTTPS access to Blockchain Data through a RESTful JSON API. Hosted Mainnet/Testnet.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"feature col-md-4 text-center\">\n" +
    "        <br>\n" +
    "        <i class=\"fa fa-bug fa-4x\"></i>\n" +
    "        <h2>\n" +
    "          Testnet Support\n" +
    "        </h2>\n" +
    "        <p class='lead lead-smaller'>\n" +
    "          Built with Testnet in mind from Day One to make writing tests easy.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"feature col-md-4 text-center\">\n" +
    "        <br>\n" +
    "        <i class=\"fa fa-btc fa-4x\"></i>\n" +
    "        <h2>\n" +
    "          Programmatic Faucet\n" +
    "        </h2>\n" +
    "        <p class='lead lead-smaller'>\n" +
    "          Programmatic access to free Bitcoins (on testnet3) for testing purposes.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <br><br>\n" +
    "    <!-- <div class=\"row\">\n" +
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
    "    </div> -->\n" +
    "    <br><br><br>\n" +
    "    <div class=\"row\">\n" +
    "      <!-- <h1 class='text-center'>Quick Start</h1> -->\n" +
    "      <div class=\"col-md-8 col-md-offset-2\">\n" +
    "        <blockquote>\n" +
    "          <p class=\"lead\">\n" +
    "            Sign up to to access the Testnet3 Faucet, lift the API Rate Limit, and be notified for new features.\n" +
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
