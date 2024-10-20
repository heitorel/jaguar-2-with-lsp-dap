import { DebugSession, InitializedEvent } from 'vscode-debugadapter';
import { DebugProtocol } from 'vscode-debugprotocol';

class MyDebugSession extends DebugSession {
    protected initializeRequest(
        response: DebugProtocol.InitializeResponse,
        args: DebugProtocol.InitializeRequestArguments
    ): void {
        response.body = {
            supportsConfigurationDoneRequest: true,
        };
        this.sendResponse(response);
        this.sendEvent(new InitializedEvent());
    }

    protected launchRequest(
        response: DebugProtocol.LaunchResponse,
        args: DebugProtocol.LaunchRequestArguments
    ): void {
        // Aqui você implementa a lógica para iniciar a depuração
        this.sendResponse(response);
    }
}

DebugSession.run(MyDebugSession);
