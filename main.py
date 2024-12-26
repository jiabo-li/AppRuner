# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
import os
import pytest


pytest_args = [#'-vs','--capture=sys',
                '--clean-alluredir',
                '--alluredir=allure-results',
                '--disable-warnings',
                '-W ignore',
                './core/Apprunner.py'
]

pytest.main(pytest_args)
os.system('allure generate -c -o allure_apptestdata')
from allure_combine import combine_allure
combine_allure('./allure_apptestdata')