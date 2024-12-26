from appium.webdriver.common.appiumby import AppiumBy

import allure
from appium.webdriver.webdriver import WebDriver

class keywords:
    driver:WebDriver = None
    def __init__(self,driver):
        self.driver = driver
    def get_args(self,args):
        if args['type'].lower()=='id':
            kw = (AppiumBy.ID,args['object'])
        if args['type'].lower() == 'xpath':
            kw = (AppiumBy.XPATH,args['object'])

        return kw

    def option_click(self,**kwargs):
        kw = self.get_args(kwargs)
        self.driver.find_element(*kw).click()

    def input_context(self,**kwargs):
        kw = self.get_args(kwargs)
        self.driver.find_element(kw).send_keys(kwargs['data'])


    def wait_sleep(self,**kwargs):
        pass

    def assert_result(self,**kwargs):
        pass