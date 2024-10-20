"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_debugadapter_1 = require("vscode-debugadapter");
class MyDebugSession extends vscode_debugadapter_1.DebugSession {
    initializeRequest(response, args) {
        response.body = {
            supportsConfigurationDoneRequest: true,
        };
        this.sendResponse(response);
        this.sendEvent(new vscode_debugadapter_1.InitializedEvent());
    }
    launchRequest(response, args) {
        // Aqui você implementa a lógica para iniciar a depuração
        this.sendResponse(response);
    }
}
vscode_debugadapter_1.DebugSession.run(MyDebugSession);
