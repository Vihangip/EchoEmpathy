from taipy import Gui
import taipy.gui.builder as tgb

with tgb.Page() as page:
    tgb.html("p", "User information:")
    tgb.input("John", label="First name")


Gui(page="WeLntalHealth").run(use_reloader = True, port = 5000)