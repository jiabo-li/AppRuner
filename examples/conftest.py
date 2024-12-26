import pytest
from appium import webdriver

@pytest.fixture()
def g_kaoyan_driver(request):
    caps = {
      "platformName": "Android",
      "appium:platformVersion": "9",
      "appium:appActivity": ".ui.activity.SplashActivity",
      "appium:deviceName": "emulator-5554",
      "appium:automationName": "UIAutomator2",
      "appium:noReset": False,
      "appium:newCommandTimeout": "3000",
      "appium:appPackage": "com.tal.kaoyan"
    }
    base_url = "http://localhost:4723/wd/hub"
    driver = webdriver.Remote(base_url,caps)
    driver.implicitly_wait(10)

    yield driver

    def end():
        driver.quit()

    request.addfinalizer(end)