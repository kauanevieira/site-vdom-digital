export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center shadow-2xl">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-500 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            Site em Construção
          </h1>
          
          <p className="text-gray-300 mb-6">
            Estamos trabalhando duro para trazer algo incrível para você. 
            Nosso site estará disponível em breve!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200"></div>
          </div>
          
          <p className="text-sm text-gray-400">
            Agradecemos sua paciência
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-xs text-gray-500">
            © 2024 VDOM Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
