import yaml
import os

base_path = "testcases"
def get_all_test_cases():
    current_path = os.path.dirname(os.path.abspath(__file__))
    print(current_path)
    parent_path = os.path.dirname(current_path)

    dir = os.path.join(parent_path,base_path)
    files = [os.path.join(dir, file) for file in os.listdir(dir)]
    caseinfos = []
    for file in files:
        with open(file,"r",encoding="utf-8") as file:
            file_task =  yaml.safe_load(file)
        caseinfos.append(file_task)
    print(caseinfos)
    return caseinfos


if __name__ == "__main__":
    get_all_test_cases()