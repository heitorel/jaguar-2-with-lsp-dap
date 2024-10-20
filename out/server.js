"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("vscode-languageserver/node");
const vscode_languageserver_1 = require("vscode-languageserver");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
// Cria a conexão do servidor com stdio ou outras features propostas
const connection = process.argv.includes('--stdio')
    ? (0, node_1.createConnection)(process.stdin, process.stdout)
    : (0, node_1.createConnection)(node_1.ProposedFeatures.all);
// Gerenciador de documentos, especificando o tipo 'TextDocument'
const documents = new vscode_languageserver_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
// Inicialização do servidor
connection.onInitialize((params) => {
    return {
        capabilities: {
            textDocumentSync: node_1.TextDocumentSyncKind.Incremental, // Define o tipo de sincronização
        }
    };
});
// Registrar as mudanças nos documentos
documents.listen(connection);
// Iniciar a conexão do servidor
connection.listen();
