        // Inicializar iconos
        lucide.createIcons();

        // Variables Generales
        const whatsappNumber = "593999999999"; 

        // Menú Móvil
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // WhatsApp Dinámico
        function contactWhatsApp(deporte) {
            const mensaje = `Hola LDC Chaguarpamba. Deseo información sobre: *${deporte}*.`;
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        }

        // Lógica de Pestañas (Mostrar/Ocultar Secciones)
        function showSection(sectionId) {
            const sections = ['inicio', 'nosotros', 'disciplinas', 'directiva', 'contacto'];
            
            sections.forEach(id => {
                const element = document.getElementById(id);
                if(element) {
                    element.classList.add('hidden');
                    element.classList.remove('block');
                }
            });

            const target = document.getElementById(sectionId);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('block');
                
                // Reiniciar animaciones de los hijos en cascada (Staggers)
                const staggers = target.querySelectorAll('[class*="stagger-"]');
                staggers.forEach(el => {
                    el.style.animation = 'none';
                    void el.offsetWidth; // Forzar repintado
                    el.style.animation = '';
                });

                // Forzar reinicio de animación CSS de entrada
                target.classList.remove('section-animate');
                void target.offsetWidth; 
                target.classList.add('section-animate');
            }

            // Actualizar estilo del menú
            const buttons = document.querySelectorAll('nav button');
            buttons.forEach(btn => {
                if (btn.id !== 'btn-contacto') {
                    btn.classList.remove('active-tab');
                }
            });

            const activeBtn = document.getElementById('btn-' + sectionId);
            if(activeBtn && activeBtn.id !== 'btn-contacto') {
                activeBtn.classList.add('active-tab');
            }

            // Volver al tope de la página
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
