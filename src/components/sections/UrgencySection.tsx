export const UrgencySection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-primary mb-6 sm:mb-8 px-2">
            E é por isso que o tempo é{" "}
            <span className="text-gold relative">
              crucial...
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8" stroke="hsl(var(--gold))" strokeWidth="2" fill="none"/>
              </svg>
            </span>
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Time Urgency */}
          <div className="bg-card rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-gold/20 shadow-lg mx-2 sm:mx-0">
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-4xl sm:text-5xl lg:text-6xl block mb-3 sm:mb-4">⏰</span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-montserrat font-bold text-primary mb-4 sm:mb-6 px-2">
                O Custo Real da Procrastinação
              </h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-inter leading-relaxed">
              <p className="text-center px-2">
                <span className="font-bold text-gold">Cada dia que você adia essa decisão,</span> 
                o "software" antigo continua rodando, aprofundando os padrões de autossabotagem.
              </p>
              
              <div className="bg-destructive/10 rounded-xl p-4 sm:p-6 border-l-4 border-destructive mx-2 sm:mx-0">
                <p className="font-semibold text-destructive mb-3 sm:mb-4 text-sm sm:text-base">O custo não é apenas mais um ano de frustração:</p>
                <ul className="space-y-2 sm:space-y-3 text-card-foreground text-sm sm:text-base">
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-destructive font-bold text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>É o desconforto de ver os outros prosperando enquanto você permanece estagnado</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-destructive font-bold text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>É perder oportunidades únicas que não voltarão</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-destructive font-bold text-lg sm:text-xl flex-shrink-0">•</span>
                    <span>É o risco de chegar ao fim da vida com o amargo arrependimento de não ter vivido seu verdadeiro potencial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Choice */}
          <div className="bg-gradient-to-r from-primary via-primary-light to-primary rounded-3xl p-8 lg:p-12 text-primary-foreground">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-montserrat font-bold mb-8">
                Você está diante de uma escolha{" "}
                <span className="text-gold">"ou-ou":</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Option 1 - Status Quo */}
                <div className="bg-white/10 rounded-2xl p-6 border border-destructive/30">
                  <div className="text-center mb-4">
                    <span className="text-4xl block mb-2">😔</span>
                    <h4 className="text-xl font-montserrat font-bold text-destructive">
                      Continuar no Mesmo Caminho
                    </h4>
                  </div>
                  <ul className="text-sm space-y-2 text-primary-foreground/80">
                    <li>• Fechar esta página</li>
                    <li>• Esperar que um milagre aconteça</li>
                    <li>• Nós dois sabemos que não vai</li>
                    <li>• Mais anos de frustração</li>
                  </ul>
                </div>
                
                {/* Option 2 - Transformation */}
                <div className="bg-gold/20 rounded-2xl p-6 border border-gold">
                  <div className="text-center mb-4">
                    <span className="text-4xl block mb-2">✨</span>
                    <h4 className="text-xl font-montserrat font-bold text-gold">
                      Assumir o Comando Agora
                    </h4>
                  </div>
                  <ul className="text-sm space-y-2 text-primary-foreground">
                    <li>• Investir menos que o valor de uma pizza</li>
                    <li>• Risco zero com garantia total</li>
                    <li>• Método testado e comprovado</li>
                    <li>• Via expressa da transformação</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white/10 rounded-xl border border-gold/30">
                <p className="text-xl font-playfair italic text-gold">
                  "A vida dos seus sonhos não vai esperar para sempre."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};