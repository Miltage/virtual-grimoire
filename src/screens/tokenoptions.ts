import { Application } from "../application";
import { PlayerToken } from "../playertoken";
import { Role } from "../role";
import { Screen } from "../screen"
import { RoleSelectScreen } from "./roleselect";
import { TokenDisplayScreen } from "./tokendisplay";

export class TokenOptionsScreen extends Screen {
    constructor(token:PlayerToken) {
        super();

        const container = document.createElement('div');
        container.classList.add("wrapper");
        this.contents.appendChild(container);

        const tokenContainer = document.createElement('div');
        tokenContainer.classList.add("token-container");
        container.appendChild(tokenContainer);

        const buttons = document.createElement('div');
        buttons.classList.add("buttons-container");
        container.appendChild(buttons);

        const dt:PlayerToken = new PlayerToken().asDisplay(0.9);
        dt.setRole(token.getRole());
        tokenContainer.appendChild(dt);

        const showButton:HTMLButtonElement = document.createElement('button');
        buttons.appendChild(showButton);
        showButton.textContent = 'Show';

        const shroudButton:HTMLButtonElement = document.createElement('button');
        buttons.appendChild(shroudButton);
        shroudButton.textContent = token.dead ? 'Unshroud' : 'Shroud';

        const changeRoleButton:HTMLButtonElement = document.createElement('button');
        buttons.appendChild(changeRoleButton);
        changeRoleButton.textContent = 'Change role';

        const changeNameButton:HTMLButtonElement = document.createElement('button');
        buttons.appendChild(changeNameButton);
        changeNameButton.textContent = 'Change name';

        const upsideDownButton:HTMLButtonElement = document.createElement('button');
        buttons.appendChild(upsideDownButton);
        upsideDownButton.textContent = 'Turn upside down';

        this.contents.onclick = () => {
            Application.ui.popScreen();
        }

        // button events

        showButton.onclick = (e) => {
            e.stopPropagation();
            Application.ui.popScreen();
            Application.ui.pushScreen(new TokenDisplayScreen(token));
        };

        shroudButton.onclick = (e) => {
            e.stopPropagation();
            token.toggleShroud();
            Application.ui.popScreen();
        };

        changeNameButton.onclick = (e) => {
            e.stopPropagation();            
            Application.ui.popScreen();
            const newName:string | null = window.prompt("Enter new name for player:", token.getPlayerName());
            if (newName) token.setPlayerName(newName);
        }

        changeRoleButton.onclick = (e) => {
            e.stopPropagation();
            Application.ui.popScreen();
            Application.ui.pushScreen(new RoleSelectScreen((role:Role) => {
                Application.ui.popScreen();
                token.setRole(role);
            }));
        }
    }
}