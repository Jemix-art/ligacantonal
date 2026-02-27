// 1. Inicializar iconos
        lucide.createIcons();

        // 2. Variables Generales
        const whatsappNumber = "593"; 

        // 3. Menú Móvil
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // 4. WhatsApp Dinámico
        function contactWhatsApp(deporte) {
            const mensaje = `Hola LDC Chaguarpamba. Deseo información sobre: *${deporte}*.`;
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        }

        // 5. Lógica de Pestañas (Mostrar/Ocultar Secciones)
        function showSection(sectionId) {
            // A. Definimos todas las secciones
            const sections = ['inicio', 'nosotros', 'disciplinas', 'directiva', 'contacto'];
            
            // B. Ocultamos todas
            sections.forEach(id => {
                const element = document.getElementById(id);
                if(element) {
                    element.classList.add('hidden');
                    element.classList.remove('block');
                }
            });

            // C. Mostramos la seleccionada
            const target = document.getElementById(sectionId);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('block');
                
                // Reiniciar animaciones de los hijos en cascada (Staggers)
                const staggers = target.querySelectorAll('[class*="stagger-"]');
                staggers.forEach(el => {
                    el.style.animation = 'none';
                    void el.offsetWidth; // Forzar repintado para que la animación empiece de cero
                    el.style.animation = '';
                });

                // Forzamos el reinicio de la animación CSS de entrada
                target.classList.remove('section-animate');
                void target.offsetWidth; // Truco de navegador para reiniciar animación
                target.classList.add('section-animate');
            }

            // D. Actualizamos el estilo del menú de navegación (botones PC)
            const buttons = document.querySelectorAll('nav button');
            buttons.forEach(btn => {
                if (btn.id !== 'btn-contacto') { // Excluimos el botón de contacto que tiene su propio estilo
                    btn.classList.remove('active-tab');
                }
            });

            const activeBtn = document.getElementById('btn-' + sectionId);
            if(activeBtn && activeBtn.id !== 'btn-contacto') {
                activeBtn.classList.add('active-tab');
            }

            // E. Volvemos al tope de la página
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }