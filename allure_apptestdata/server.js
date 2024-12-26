
        function _base64ToArrayBuffer(base64) {
            var binary_string = window.atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        }

        function _arrayBufferToBase64( buffer ) {
          var binary = '';
          var bytes = new Uint8Array( buffer );
          var len = bytes.byteLength;
          for (var i = 0; i < len; i++) {
             binary += String.fromCharCode( bytes[ i ] );
          }
          return window.btoa( binary );
        }

        document.addEventListener("DOMContentLoaded", function() {
            var old_prefilter = jQuery.htmlPrefilter;

            jQuery.htmlPrefilter = function(v) {
            
                var regs = [
                    /<a[^>]*href="(?<url>[^"]*)"[^>]*>/gi,
                    /<img[^>]*src="(?<url>[^"]*)"\/?>/gi,
                    /<source[^>]*src="(?<url>[^"]*)"/gi
                ];
                
                var replaces = {};

                for (i in regs)
                {
                    reg = regs[i];

                    var m = true;
                    var n = 0;
                    while (m && n < 100)
                    {
                        n += 1;
                        
                        m = reg.exec(v);
                        if (m)
                        {
                            if (m['groups'] && m['groups']['url'])
                            {
                                var url = m['groups']['url'];
                                if (server_data.hasOwnProperty(url))
                                {
                                    console.log(`Added url:${url} to be replaced with data of ${server_data[url].length} bytes length`);
                                    replaces[url] = server_data[url];                                    
                                }
                            }
                        }
                    }
                }
                
                for (let src in replaces)
                {
                    let dest = replaces[src];
                    v = v.replace(src, dest);
                }

                return old_prefilter(v);
            };
        });

        var server_data={
 "data/behaviors.csv": "\"Epic\",\"Feature\",\"Story\",\"FAILED\",\"BROKEN\",\"PASSED\",\"SKIPPED\",\"UNKNOWN\"\n\"\",\"\",\"\",\"0\",\"1\",\"0\",\"0\",\"0\"\n", 
 "data/behaviors.json": "{\"uid\":\"b1a8273437954620fa374b796ffaacdd\",\"name\":\"behaviors\",\"children\":[{\"name\":\"test_execute_case[caseinfo0]\",\"uid\":\"e8def7829e7be489\",\"parentUid\":\"b1a8273437954620fa374b796ffaacdd\",\"status\":\"broken\",\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"{'desc': '放大镜的模糊查询', 'pre_script': ['print(\\\"执行前...\\\")'], 'steps': [{'点击搜索图标': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/iv_search'}}, {'输入关键字': {'keyword': 'input_context', 'type': 'id', 'object': 'com.zhao.myreader:id/et_search_key', 'data': ''}}, {'点击确定按钮': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_search_conform'}}, {'强制等待': {'keyword': 'wait_sleep', 'data': '10'}}, {'assert': {'keyword': 'assert_result', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_book_name', 'data': 'SELECT book_name FROM book WHERE book_name like \\\"\\\";'}}], 'post_script': ['print(\\\"执行后...\\\")']}\"],\"tags\":[]}]}", 
 "data/categories.csv": "\"Category\",\"FAILED\",\"BROKEN\",\"PASSED\",\"SKIPPED\",\"UNKNOWN\"\n\"Test defects\",\"0\",\"1\",\"0\",\"0\",\"0\"\n", 
 "data/categories.json": "{\"uid\":\"4b4757e66a1912dae1a509f688f20b0f\",\"name\":\"categories\",\"children\":[{\"name\":\"Test defects\",\"children\":[{\"name\":\"_pytest.fixtures.FixtureLookupError: ('g_kaoyan_driver', &lt;FixtureRequest for &lt;Function test_execute_case[caseinfo0]&gt;&gt;)\",\"children\":[{\"name\":\"test_execute_case[caseinfo0]\",\"uid\":\"e8def7829e7be489\",\"parentUid\":\"f8027d31033165826c9348dde3680a67\",\"status\":\"broken\",\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"{'desc': '放大镜的模糊查询', 'pre_script': ['print(\\\"执行前...\\\")'], 'steps': [{'点击搜索图标': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/iv_search'}}, {'输入关键字': {'keyword': 'input_context', 'type': 'id', 'object': 'com.zhao.myreader:id/et_search_key', 'data': ''}}, {'点击确定按钮': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_search_conform'}}, {'强制等待': {'keyword': 'wait_sleep', 'data': '10'}}, {'assert': {'keyword': 'assert_result', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_book_name', 'data': 'SELECT book_name FROM book WHERE book_name like \\\"\\\";'}}], 'post_script': ['print(\\\"执行后...\\\")']}\"],\"tags\":[]}],\"uid\":\"f8027d31033165826c9348dde3680a67\"}],\"uid\":\"bdbf199525818fae7a8651db9eafe741\"}]}", 
 "data/packages.json": "{\"uid\":\"83edc06c07f9ae9e47eb6dd1b683e4e2\",\"name\":\"packages\",\"children\":[{\"name\":\"core.Apprunner\",\"children\":[{\"name\":\"test_execute_case[caseinfo0]\",\"uid\":\"e8def7829e7be489\",\"parentUid\":\"448d1ce1b9bab597e8c74815b847a5de\",\"status\":\"broken\",\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"{'desc': '放大镜的模糊查询', 'pre_script': ['print(\\\"执行前...\\\")'], 'steps': [{'点击搜索图标': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/iv_search'}}, {'输入关键字': {'keyword': 'input_context', 'type': 'id', 'object': 'com.zhao.myreader:id/et_search_key', 'data': ''}}, {'点击确定按钮': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_search_conform'}}, {'强制等待': {'keyword': 'wait_sleep', 'data': '10'}}, {'assert': {'keyword': 'assert_result', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_book_name', 'data': 'SELECT book_name FROM book WHERE book_name like \\\"\\\";'}}], 'post_script': ['print(\\\"执行后...\\\")']}\"],\"tags\":[]}],\"uid\":\"core.Apprunner\"}]}", 
 "data/suites.csv": "\"Status\",\"Start Time\",\"Stop Time\",\"Duration in ms\",\"Parent Suite\",\"Suite\",\"Sub Suite\",\"Test Class\",\"Test Method\",\"Name\",\"Description\"\n\"broken\",\"Sun Nov 24 18:11:55 CST 2024\",\"Sun Nov 24 18:11:55 CST 2024\",\"0\",\"core\",\"Apprunner\",\"Test_apprunner\",\"\",\"\",\"test_execute_case[caseinfo0]\",\"\"\n", 
 "data/suites.json": "{\"uid\":\"98d3104e051c652961429bf95fa0b5d6\",\"name\":\"suites\",\"children\":[{\"name\":\"core\",\"children\":[{\"name\":\"Apprunner\",\"children\":[{\"name\":\"Test_apprunner\",\"children\":[{\"name\":\"test_execute_case[caseinfo0]\",\"uid\":\"e8def7829e7be489\",\"parentUid\":\"bda4bbbed84158b2628a25ce8e11d78b\",\"status\":\"broken\",\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"{'desc': '放大镜的模糊查询', 'pre_script': ['print(\\\"执行前...\\\")'], 'steps': [{'点击搜索图标': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/iv_search'}}, {'输入关键字': {'keyword': 'input_context', 'type': 'id', 'object': 'com.zhao.myreader:id/et_search_key', 'data': ''}}, {'点击确定按钮': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_search_conform'}}, {'强制等待': {'keyword': 'wait_sleep', 'data': '10'}}, {'assert': {'keyword': 'assert_result', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_book_name', 'data': 'SELECT book_name FROM book WHERE book_name like \\\"\\\";'}}], 'post_script': ['print(\\\"执行后...\\\")']}\"],\"tags\":[]}],\"uid\":\"bda4bbbed84158b2628a25ce8e11d78b\"}],\"uid\":\"301755080d9605ab55fcf333f9b9af22\"}],\"uid\":\"72796fdbb1ef5e42d7f9951dd4e7356a\"}]}", 
 "data/timeline.json": "{\"uid\":\"ab17fc5a4eb3bca4b216b548c7f9fcbc\",\"name\":\"timeline\",\"children\":[{\"name\":\"DESKTOP-VRHUDD7\",\"children\":[{\"name\":\"18332-MainThread\",\"children\":[{\"name\":\"test_execute_case[caseinfo0]\",\"uid\":\"e8def7829e7be489\",\"parentUid\":\"4db3af48173b4dc975df6c635d424d25\",\"status\":\"broken\",\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"{'desc': '放大镜的模糊查询', 'pre_script': ['print(\\\"执行前...\\\")'], 'steps': [{'点击搜索图标': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/iv_search'}}, {'输入关键字': {'keyword': 'input_context', 'type': 'id', 'object': 'com.zhao.myreader:id/et_search_key', 'data': ''}}, {'点击确定按钮': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_search_conform'}}, {'强制等待': {'keyword': 'wait_sleep', 'data': '10'}}, {'assert': {'keyword': 'assert_result', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_book_name', 'data': 'SELECT book_name FROM book WHERE book_name like \\\"\\\";'}}], 'post_script': ['print(\\\"执行后...\\\")']}\"],\"tags\":[]}],\"uid\":\"4db3af48173b4dc975df6c635d424d25\"}],\"uid\":\"c70900a09c0cf8c34187157433a20016\"}]}", 
 "data/test-cases/e8def7829e7be489.json": "{\"uid\":\"e8def7829e7be489\",\"name\":\"test_execute_case[caseinfo0]\",\"fullName\":\"core.Apprunner.Test_apprunner#test_execute_case\",\"historyId\":\"feb494aa752588beffc6c9bc23457cbb\",\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0},\"status\":\"broken\",\"statusMessage\":\"_pytest.fixtures.FixtureLookupError: ('g_kaoyan_driver', &lt;FixtureRequest for &lt;Function test_execute_case[caseinfo0]&gt;&gt;)\",\"statusTrace\":\"file D:\\\\python_project\\\\APPRuner\\\\core\\\\Apprunner.py, line 9\\n      @pytest.mark.parametrize('caseinfo',caseinfo)\\n      def test_execute_case(self,g_kaoyan_driver,caseinfo):\\nE       fixture 'g_kaoyan_driver' not found\\n&gt;       available fixtures: anyio_backend, anyio_backend_name, anyio_backend_options, cache, capfd, capfdbinary, caplog, capsys, capsysbinary, doctest_namespace, extra, extras, include_metadata_in_junit_xml, metadata, monkeypatch, pytestconfig, record_property, record_testsuite_property, record_xml_attribute, recwarn, testrun_uid, tmp_path, tmp_path_factory, tmpdir, tmpdir_factory, worker_id\\n&gt;       use 'pytest --fixtures [testpath]' for help on them.\\n\\nD:\\\\python_project\\\\APPRuner\\\\core\\\\Apprunner.py:9\",\"flaky\":false,\"newFailed\":false,\"newBroken\":false,\"newPassed\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"beforeStages\":[],\"afterStages\":[],\"labels\":[{\"name\":\"parentSuite\",\"value\":\"core\"},{\"name\":\"suite\",\"value\":\"Apprunner\"},{\"name\":\"subSuite\",\"value\":\"Test_apprunner\"},{\"name\":\"host\",\"value\":\"DESKTOP-VRHUDD7\"},{\"name\":\"thread\",\"value\":\"18332-MainThread\"},{\"name\":\"framework\",\"value\":\"pytest\"},{\"name\":\"language\",\"value\":\"cpython3\"},{\"name\":\"package\",\"value\":\"core.Apprunner\"},{\"name\":\"resultFormat\",\"value\":\"allure2\"}],\"parameters\":[{\"name\":\"caseinfo\",\"value\":\"{'desc': '放大镜的模糊查询', 'pre_script': ['print(\\\"执行前...\\\")'], 'steps': [{'点击搜索图标': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/iv_search'}}, {'输入关键字': {'keyword': 'input_context', 'type': 'id', 'object': 'com.zhao.myreader:id/et_search_key', 'data': ''}}, {'点击确定按钮': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_search_conform'}}, {'强制等待': {'keyword': 'wait_sleep', 'data': '10'}}, {'assert': {'keyword': 'assert_result', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_book_name', 'data': 'SELECT book_name FROM book WHERE book_name like \\\"\\\";'}}], 'post_script': ['print(\\\"执行后...\\\")']}\"}],\"links\":[],\"hidden\":false,\"retry\":false,\"extra\":{\"severity\":\"normal\",\"retries\":[],\"categories\":[{\"name\":\"Test defects\",\"matchedStatuses\":[],\"flaky\":false}],\"tags\":[]},\"source\":\"e8def7829e7be489.json\",\"parameterValues\":[\"{'desc': '放大镜的模糊查询', 'pre_script': ['print(\\\"执行前...\\\")'], 'steps': [{'点击搜索图标': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/iv_search'}}, {'输入关键字': {'keyword': 'input_context', 'type': 'id', 'object': 'com.zhao.myreader:id/et_search_key', 'data': ''}}, {'点击确定按钮': {'keyword': 'option_click', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_search_conform'}}, {'强制等待': {'keyword': 'wait_sleep', 'data': '10'}}, {'assert': {'keyword': 'assert_result', 'type': 'id', 'object': 'com.zhao.myreader:id/tv_book_name', 'data': 'SELECT book_name FROM book WHERE book_name like \\\"\\\";'}}], 'post_script': ['print(\\\"执行后...\\\")']}\"]}", 
 "export/influxDbData.txt": "launch_status failed=0 1732443119000000000\nlaunch_status broken=1 1732443119000000000\nlaunch_status passed=0 1732443119000000000\nlaunch_status skipped=0 1732443119000000000\nlaunch_status unknown=0 1732443119000000000\nlaunch_time duration=0 1732443119000000000\nlaunch_time min_duration=0 1732443119000000000\nlaunch_time max_duration=0 1732443119000000000\nlaunch_time sum_duration=0 1732443119000000000\nlaunch_problems test_defects=1 1732443119000000000\nlaunch_retries retries=0 1732443119000000000\nlaunch_retries run=1 1732443119000000000\n", 
 "export/mail.html": "data:text/html;base64, PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4KICAgIDx0aXRsZT5BbGx1cmUgUmVwb3J0IHN1bW1hcnkgbWFpbDwvdGl0bGU+CjwvaGVhZD4KPGJvZHk+CiAgICBNYWlsIGJvZHkKPC9ib2R5Pgo8L2h0bWw+Cg==", 
 "export/prometheusData.txt": "launch_status_failed 0\nlaunch_status_broken 1\nlaunch_status_passed 0\nlaunch_status_skipped 0\nlaunch_status_unknown 0\nlaunch_time_duration 0\nlaunch_time_min_duration 0\nlaunch_time_max_duration 0\nlaunch_time_sum_duration 0\nlaunch_problems_test_defects 1\nlaunch_retries_retries 0\nlaunch_retries_run 1\n", 
 "history/categories-trend.json": "[{\"data\":{\"Test defects\":1}}]", 
 "history/duration-trend.json": "[{\"data\":{\"duration\":0}}]", 
 "history/history-trend.json": "[{\"data\":{\"failed\":0,\"broken\":1,\"skipped\":0,\"passed\":0,\"unknown\":0,\"total\":1}}]", 
 "history/history.json": "{\"feb494aa752588beffc6c9bc23457cbb\":{\"statistic\":{\"failed\":0,\"broken\":1,\"skipped\":0,\"passed\":0,\"unknown\":0,\"total\":1},\"items\":[{\"uid\":\"e8def7829e7be489\",\"status\":\"broken\",\"statusDetails\":\"_pytest.fixtures.FixtureLookupError: ('g_kaoyan_driver', &lt;FixtureRequest for &lt;Function test_execute_case[caseinfo0]&gt;&gt;)\",\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0}}]}}", 
 "history/retry-trend.json": "[{\"data\":{\"run\":1,\"retry\":0}}]", 
 "plugin/behaviors/index.js": "'use strict';\n\nallure.api.addTranslation('en', {\n    tab: {\n        behaviors: {\n            name: 'Behaviors'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Features by stories',\n            showAll: 'show all'\n        }\n    }\n});\n\nallure.api.addTranslation('ru', {\n    tab: {\n        behaviors: {\n            name: 'Функциональность'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Функциональность',\n            showAll: 'показать все'\n        }\n    }\n});\n\nallure.api.addTranslation('zh', {\n    tab: {\n        behaviors: {\n            name: '功能'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: '特性场景',\n            showAll: '显示所有'\n        }\n    }\n});\n\nallure.api.addTranslation('de', {\n    tab: {\n        behaviors: {\n            name: 'Verhalten'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Features nach Stories',\n            showAll: 'Zeige alle'\n        }\n    }\n});\n\nallure.api.addTranslation('nl', {\n    tab: {\n        behaviors: {\n            name: 'Functionaliteit'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Features en story’s',\n            showAll: 'Toon alle'\n        }\n    }\n});\n\nallure.api.addTranslation('he', {\n    tab: {\n        behaviors: {\n            name: 'התנהגויות'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'תכונות לפי סיפורי משתמש',\n            showAll: 'הצג הכול'\n        }\n    }\n});\n\nallure.api.addTranslation('br', {\n    tab: {\n        behaviors: {\n            name: 'Comportamentos'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funcionalidades por história',\n            showAll: 'Mostrar tudo'\n        }\n    }\n});\n\nallure.api.addTranslation('ja', {\n    tab: {\n        behaviors: {\n            name: '振る舞い'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'ストーリー別の機能',\n            showAll: '全て表示'\n        }\n    }\n});\n\nallure.api.addTranslation('es', {\n    tab: {\n        behaviors: {\n            name: 'Funcionalidades'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funcionalidades por Historias de Usuario',\n            showAll: 'mostrar todo'\n        }\n    }\n});\n\nallure.api.addTranslation('kr', {\n    tab: {\n        behaviors: {\n            name: '동작'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: '스토리별 기능',\n            showAll: '전체 보기'\n        }\n    }\n});\n\nallure.api.addTranslation('fr', {\n    tab: {\n        behaviors: {\n            name: 'Comportements'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Thèmes par histoires',\n            showAll: 'Montrer tout'\n        }\n    }\n});\n\nallure.api.addTranslation('pl', {\n    tab: {\n        behaviors: {\n            name: 'Zachowania'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funkcje według historii',\n            showAll: 'pokaż wszystko'\n        }\n    }\n});\n\nallure.api.addTranslation('az', {\n    tab: {\n        behaviors: {\n            name: 'Davranışlar'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Hekayələr üzrə xüsusiyyətlər',\n            showAll: 'hamısını göstər'\n        }\n    }\n});\n\nallure.api.addTranslation('isv', {\n    tab: {\n        behaviors: {\n            name: 'Funkcionalnost',\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funkcionalnost',\n            showAll: 'pokaži vsěčto',\n        }\n    }\n});\n\nallure.api.addTab('behaviors', {\n    title: 'tab.behaviors.name', icon: 'fa fa-list',\n    route: 'behaviors(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',\n    onEnter: (function (testGroup, testResult, testResultTab) {\n        return new allure.components.TreeLayout({\n            testGroup: testGroup,\n            testResult: testResult,\n            testResultTab: testResultTab,\n            tabName: 'tab.behaviors.name',\n            baseUrl: 'behaviors',\n            url: 'data/behaviors.json',\n            csvUrl: 'data/behaviors.csv'\n        });\n    })\n});\n\nallure.api.addWidget('widgets', 'behaviors', allure.components.WidgetStatusView.extend({\n    rowTag: 'a',\n    title: 'widget.behaviors.name',\n    baseUrl: 'behaviors',\n    showLinks: true\n}));\n", 
 "plugin/packages/index.js": "'use strict';\n\nallure.api.addTranslation('en', {\n    tab: {\n        packages: {\n            name: 'Packages'\n        }\n    }\n});\n\nallure.api.addTranslation('ru', {\n    tab: {\n        packages: {\n            name: 'Пакеты'\n        }\n    }\n});\n\nallure.api.addTranslation('zh', {\n    tab: {\n        packages: {\n            name: '包'\n        }\n    }\n});\n\nallure.api.addTranslation('de', {\n    tab: {\n        packages: {\n            name: 'Pakete'\n        }\n    }\n});\n\nallure.api.addTranslation('nl', {\n    tab: {\n        packages: {\n            name: 'Packages'\n        }\n    }\n});\n\nallure.api.addTranslation('he', {\n    tab: {\n        packages: {\n            name: 'חבילות'\n        }\n    }\n});\n\nallure.api.addTranslation('br', {\n    tab: {\n        packages: {\n            name: 'Pacotes'\n        }\n    }\n});\n\nallure.api.addTranslation('ja', {\n    tab: {\n        packages: {\n            name: 'パッケージ'\n        }\n    }\n});\n\nallure.api.addTranslation('es', {\n    tab: {\n        packages: {\n            name: 'Paquetes'\n        }\n    }\n});\n\nallure.api.addTranslation('kr', {\n    tab: {\n        packages: {\n            name: '패키지'\n        }\n    }\n});\n\nallure.api.addTranslation('fr', {\n    tab: {\n        packages: {\n            name: 'Paquets'\n        }\n    }\n});\n\nallure.api.addTranslation('pl', {\n    tab: {\n        packages: {\n            name: 'Pakiety'\n        }\n    }\n});\n\nallure.api.addTranslation('az', {\n    tab: {\n        packages: {\n            name: 'Paketlər'\n        }\n    }\n});\n\nallure.api.addTranslation('isv', {\n    tab: {\n        packages: {\n            name: 'Pakety'\n        }\n    }\n});\n\nallure.api.addTab('packages', {\n    title: 'tab.packages.name', icon: 'fa fa-align-left',\n    route: 'packages(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',\n    onEnter: (function (testGroup, testResult, testResultTab) {\n        return new allure.components.TreeLayout({\n            testGroup: testGroup,\n            testResult: testResult,\n            testResultTab: testResultTab,\n            tabName: 'tab.packages.name',\n            baseUrl: 'packages',\n            url: 'data/packages.json'\n        });\n    })\n});\n", 
 "plugin/screen-diff/index.js": "(function () {\n    var settings = allure.getPluginSettings('screen-diff', { diffType: 'diff' });\n\n    function renderImage(src) {\n        return (\n            '&lt;div class=\"screen-diff__container\"&gt;' +\n            '&lt;img class=\"screen-diff__image\" src=\"' +\n            src +\n            '\"&gt;' +\n            '&lt;/div&gt;'\n        );\n    }\n\n    function findImage(data, name) {\n        if (data.testStage && data.testStage.attachments) {\n            var matchedImage = data.testStage.attachments.filter(function (attachment) {\n                return attachment.name === name;\n            })[0];\n            if (matchedImage) {\n                return 'data/attachments/' + matchedImage.source;\n            }\n        }\n        return null;\n    }\n\n    function renderDiffContent(type, diffImage, actualImage, expectedImage) {\n        if (type === 'diff') {\n            if (diffImage) {\n                return renderImage(diffImage);\n            }\n        }\n        if (type === 'overlay' && expectedImage) {\n            return (\n                '&lt;div class=\"screen-diff__overlay screen-diff__container\"&gt;' +\n                '&lt;img class=\"screen-diff__image\" src=\"' +\n                expectedImage +\n                '\"&gt;' +\n                '&lt;div class=\"screen-diff__image-over\"&gt;' +\n                '&lt;img class=\"screen-diff__image\" src=\"' +\n                actualImage +\n                '\"&gt;' +\n                '&lt;/div&gt;' +\n                '&lt;/div&gt;'\n            );\n        }\n        if (actualImage) {\n            return renderImage(actualImage);\n        }\n        return 'No diff data provided';\n    }\n\n    var TestResultView = Backbone.Marionette.View.extend({\n        regions: {\n            subView: '.screen-diff-view',\n        },\n        template: function () {\n            return '&lt;div class=\"screen-diff-view\"&gt;&lt;/div&gt;';\n        },\n        onRender: function () {\n            var data = this.model.toJSON();\n            var testType = data.labels.filter(function (label) {\n                return label.name === 'testType';\n            })[0];\n            var diffImage = findImage(data, 'diff');\n            var actualImage = findImage(data, 'actual');\n            var expectedImage = findImage(data, 'expected');\n            if (!testType || testType.value !== 'screenshotDiff') {\n                return;\n            }\n            this.showChildView(\n                'subView',\n                new ScreenDiffView({\n                    diffImage: diffImage,\n                    actualImage: actualImage,\n                    expectedImage: expectedImage,\n                }),\n            );\n        },\n    });\n    var ErrorView = Backbone.Marionette.View.extend({\n        templateContext: function () {\n            return this.options;\n        },\n        template: function (data) {\n            return '&lt;pre class=\"screen-diff-error\"&gt;' + data.error + '&lt;/pre&gt;';\n        },\n    });\n    var AttachmentView = Backbone.Marionette.View.extend({\n        regions: {\n            subView: '.screen-diff-view',\n        },\n        template: function () {\n            return '&lt;div class=\"screen-diff-view\"&gt;&lt;/div&gt;';\n        },\n        onRender: function () {\n            jQuery\n                .getJSON(this.options.sourceUrl)\n                .then(this.renderScreenDiffView.bind(this), this.renderErrorView.bind(this));\n        },\n        renderErrorView: function (error) {\n            console.log(error);\n            this.showChildView(\n                'subView',\n                new ErrorView({\n                    error: error.statusText,\n                }),\n            );\n        },\n        renderScreenDiffView: function (data) {\n            this.showChildView(\n                'subView',\n                new ScreenDiffView({\n                    diffImage: data.diff,\n                    actualImage: data.actual,\n                    expectedImage: data.expected,\n                }),\n            );\n        },\n    });\n\n    var ScreenDiffView = Backbone.Marionette.View.extend({\n        className: 'pane__section',\n        events: function () {\n            return {\n                ['click [name=\"screen-diff-type-' + this.cid + '\"]']: 'onDiffTypeChange',\n                'mousemove .screen-diff__overlay': 'onOverlayMove',\n            };\n        },\n        initialize: function (options) {\n            this.diffImage = options.diffImage;\n            this.actualImage = options.actualImage;\n            this.expectedImage = options.expectedImage;\n            this.radioName = 'screen-diff-type-' + this.cid;\n        },\n        templateContext: function () {\n            return {\n                diffType: settings.get('diffType'),\n                diffImage: this.diffImage,\n                actualImage: this.actualImage,\n                expectedImage: this.expectedImage,\n                radioName: this.radioName,\n            };\n        },\n        template: function (data) {\n            if (!data.diffImage && !data.actualImage && !data.expectedImage) {\n                return '';\n            }\n\n            return (\n                '&lt;h3 class=\"pane__section-title\"&gt;Screen Diff&lt;/h3&gt;' +\n                '&lt;div class=\"screen-diff__content\"&gt;' +\n                '&lt;div class=\"screen-diff__switchers\"&gt;' +\n                '&lt;label&gt;&lt;input type=\"radio\" name=\"' +\n                data.radioName +\n                '\" value=\"diff\"&gt; Show diff&lt;/label&gt;' +\n                '&lt;label&gt;&lt;input type=\"radio\" name=\"' +\n                data.radioName +\n                '\" value=\"overlay\"&gt; Show overlay&lt;/label&gt;' +\n                '&lt;/div&gt;' +\n                renderDiffContent(\n                    data.diffType,\n                    data.diffImage,\n                    data.actualImage,\n                    data.expectedImage,\n                ) +\n                '&lt;/div&gt;'\n            );\n        },\n        adjustImageSize: function (event) {\n            var overImage = this.$(event.target);\n            overImage.width(overImage.width());\n        },\n        onRender: function () {\n            const diffType = settings.get('diffType');\n            this.$('[name=\"' + this.radioName + '\"][value=\"' + diffType + '\"]').prop(\n                'checked',\n                true,\n            );\n            if (diffType === 'overlay') {\n                this.$('.screen-diff__image-over img').on('load', this.adjustImageSize.bind(this));\n            }\n        },\n        onOverlayMove: function (event) {\n            var pageX = event.pageX;\n            var containerScroll = this.$('.screen-diff__container').scrollLeft();\n            var elementX = event.currentTarget.getBoundingClientRect().left;\n            var delta = pageX - elementX + containerScroll;\n            this.$('.screen-diff__image-over').width(delta);\n        },\n        onDiffTypeChange: function (event) {\n            settings.save('diffType', event.target.value);\n            this.render();\n        },\n    });\n    allure.api.addTestResultBlock(TestResultView, { position: 'before' });\n    allure.api.addAttachmentViewer('application/vnd.allure.image.diff', {\n        View: AttachmentView,\n        icon: 'fa fa-exchange',\n    });\n})();\n", 
 "plugin/screen-diff/styles.css": ".screen-diff__switchers {\n  margin-bottom: 1em;\n}\n\n.screen-diff__switchers label + label {\n  margin-left: 1em;\n}\n\n.screen-diff__overlay {\n  position: relative;\n  cursor: col-resize;\n}\n\n.screen-diff__container {\n  overflow-x: auto;\n}\n\n.screen-diff__image-over {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background: #fff;\n  position: absolute;\n  overflow: hidden;\n  box-shadow: 2px 0 1px -1px #aaa;\n}\n\n.screen-diff-error {\n  color: #fd5a3e;\n}\n", 
 "widgets/behaviors.json": "{\"total\":1,\"items\":[]}", 
 "widgets/categories-trend.json": "[{\"data\":{\"Test defects\":1}}]", 
 "widgets/categories.json": "{\"total\":1,\"items\":[{\"uid\":\"bdbf199525818fae7a8651db9eafe741\",\"name\":\"Test defects\",\"statistic\":{\"failed\":0,\"broken\":1,\"skipped\":0,\"passed\":0,\"unknown\":0,\"total\":1}}]}", 
 "widgets/duration-trend.json": "[{\"data\":{\"duration\":0}}]", 
 "widgets/duration.json": "[{\"uid\":\"e8def7829e7be489\",\"name\":\"test_execute_case[caseinfo0]\",\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0},\"status\":\"broken\",\"severity\":\"normal\"}]", 
 "widgets/environment.json": "[]", 
 "widgets/executors.json": "[]", 
 "widgets/history-trend.json": "[{\"data\":{\"failed\":0,\"broken\":1,\"skipped\":0,\"passed\":0,\"unknown\":0,\"total\":1}}]", 
 "widgets/launch.json": "[]", 
 "widgets/retry-trend.json": "[{\"data\":{\"run\":1,\"retry\":0}}]", 
 "widgets/severity.json": "[{\"uid\":\"e8def7829e7be489\",\"name\":\"test_execute_case[caseinfo0]\",\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0},\"status\":\"broken\",\"severity\":\"normal\"}]", 
 "widgets/status-chart.json": "[{\"uid\":\"e8def7829e7be489\",\"name\":\"test_execute_case[caseinfo0]\",\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0},\"status\":\"broken\",\"severity\":\"normal\"}]", 
 "widgets/suites.json": "{\"total\":1,\"items\":[{\"uid\":\"72796fdbb1ef5e42d7f9951dd4e7356a\",\"name\":\"core\",\"statistic\":{\"failed\":0,\"broken\":1,\"skipped\":0,\"passed\":0,\"unknown\":0,\"total\":1}}]}", 
 "widgets/summary.json": "{\"reportName\":\"Allure Report\",\"testRuns\":[],\"statistic\":{\"failed\":0,\"broken\":1,\"skipped\":0,\"passed\":0,\"unknown\":0,\"total\":1},\"time\":{\"start\":1732443115727,\"stop\":1732443115727,\"duration\":0,\"minDuration\":0,\"maxDuration\":0,\"sumDuration\":0}}", 
};
    var server = sinon.fakeServer.create();

                server.respondWith("GET", "data/behaviors.csv", [
                      200, { "Content-Type": "text/csv" }, server_data["data/behaviors.csv"],
                ]);
            
                server.respondWith("GET", "data/behaviors.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/behaviors.json"],
                ]);
            
                server.respondWith("GET", "data/categories.csv", [
                      200, { "Content-Type": "text/csv" }, server_data["data/categories.csv"],
                ]);
            
                server.respondWith("GET", "data/categories.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/categories.json"],
                ]);
            
                server.respondWith("GET", "data/packages.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/packages.json"],
                ]);
            
                server.respondWith("GET", "data/suites.csv", [
                      200, { "Content-Type": "text/csv" }, server_data["data/suites.csv"],
                ]);
            
                server.respondWith("GET", "data/suites.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/suites.json"],
                ]);
            
                server.respondWith("GET", "data/timeline.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/timeline.json"],
                ]);
            
                server.respondWith("GET", "data/test-cases/e8def7829e7be489.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/test-cases/e8def7829e7be489.json"],
                ]);
            
                server.respondWith("GET", "export/influxDbData.txt", [
                      200, { "Content-Type": "text/plain;charset=UTF-8" }, server_data["export/influxDbData.txt"],
                ]);
            
                server.respondWith("GET", "export/mail.html", [
                      200, { "Content-Type": "text/html" }, server_data["export/mail.html"],
                ]);
            
                server.respondWith("GET", "export/prometheusData.txt", [
                      200, { "Content-Type": "text/plain;charset=UTF-8" }, server_data["export/prometheusData.txt"],
                ]);
            
                server.respondWith("GET", "history/categories-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/categories-trend.json"],
                ]);
            
                server.respondWith("GET", "history/duration-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/duration-trend.json"],
                ]);
            
                server.respondWith("GET", "history/history-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/history-trend.json"],
                ]);
            
                server.respondWith("GET", "history/history.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/history.json"],
                ]);
            
                server.respondWith("GET", "history/retry-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/retry-trend.json"],
                ]);
            
                server.respondWith("GET", "plugin/behaviors/index.js", [
                      200, { "Content-Type": "application/javascript" }, server_data["plugin/behaviors/index.js"],
                ]);
            
                server.respondWith("GET", "plugin/packages/index.js", [
                      200, { "Content-Type": "application/javascript" }, server_data["plugin/packages/index.js"],
                ]);
            
                server.respondWith("GET", "plugin/screen-diff/index.js", [
                      200, { "Content-Type": "application/javascript" }, server_data["plugin/screen-diff/index.js"],
                ]);
            
                server.respondWith("GET", "plugin/screen-diff/styles.css", [
                      200, { "Content-Type": "text/css" }, server_data["plugin/screen-diff/styles.css"],
                ]);
            
                server.respondWith("GET", "widgets/behaviors.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/behaviors.json"],
                ]);
            
                server.respondWith("GET", "widgets/categories-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/categories-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/categories.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/categories.json"],
                ]);
            
                server.respondWith("GET", "widgets/duration-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/duration-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/duration.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/duration.json"],
                ]);
            
                server.respondWith("GET", "widgets/environment.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/environment.json"],
                ]);
            
                server.respondWith("GET", "widgets/executors.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/executors.json"],
                ]);
            
                server.respondWith("GET", "widgets/history-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/history-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/launch.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/launch.json"],
                ]);
            
                server.respondWith("GET", "widgets/retry-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/retry-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/severity.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/severity.json"],
                ]);
            
                server.respondWith("GET", "widgets/status-chart.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/status-chart.json"],
                ]);
            
                server.respondWith("GET", "widgets/suites.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/suites.json"],
                ]);
            
                server.respondWith("GET", "widgets/summary.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/summary.json"],
                ]);
            server.autoRespond = true;