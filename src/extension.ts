import * as path from 'path';
import * as vscode from 'vscode';
import { LanguageClient, TransportKind } from 'vscode-languageclient/node';

export function activate(context: vscode.ExtensionContext) {
  const serverModule = context.asAbsolutePath(
    path.join('out', 'server.js')
  );

  const serverOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: { module: serverModule, transport: TransportKind.ipc }
  };

  const clientOptions = {
    documentSelector: [{ scheme: 'file', language: 'plaintext' }]
  };

  const client = new LanguageClient(
    'codeAnalysisServer',
    'Code Analysis Server',
    serverOptions,
    clientOptions
  );

  context.subscriptions.push(client.start());
}
