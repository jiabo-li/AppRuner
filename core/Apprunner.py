import allure
import pytest
from keywords.keywords import keywords
from parse import yamlparser


class Test_apprunner():
    caseinfo = yamlparser.get_all_test_cases()
    @pytest.mark.parametrize('caseinfo',caseinfo)
    def test_execute_case(self,g_kaoyan_driver,caseinfo):
        des = caseinfo['desc']
        steps = caseinfo['steps']
        allure.dynamic.title(des)
        driver = g_kaoyan_driver
        kw = keywords(driver)
        for step in steps:
            for key,value in step.items():
                step_name = key
                key_function = value['keyword']
                args = value

            with allure.step(step_name):
                try:
                    key_func = kw.__getattribute__(key_function)
                except Exception as e:
                    print(e)

                key_func(**args)

