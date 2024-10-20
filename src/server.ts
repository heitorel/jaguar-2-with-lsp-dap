import {
  createConnection,
  ProposedFeatures,
  InitializeParams,
  InitializeResult,
  TextDocumentSyncKind
} from 'vscode-languageserver/node';
import { TextDocuments } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';

// Cria a conexão do servidor com stdio ou outras features propostas
const connection = process.argv.includes('--stdio')
  ? createConnection(process.stdin, process.stdout)
  : createConnection(ProposedFeatures.all);

// Gerenciador de documentos, especificando o tipo 'TextDocument'
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

// Inicialização do servidor
connection.onInitialize((params: InitializeParams): InitializeResult => {
  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,  // Define o tipo de sincronização
    }
  };
});

// Registrar as mudanças nos documentos
documents.listen(connection);

// Iniciar a conexão do servidor
connection.listen();
