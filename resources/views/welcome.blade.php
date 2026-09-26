<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MediCare - Gestion Hospitalière</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --primary: #2563eb;
            --primary-light: #3b82f6;
            --dark: #1e293b;
            --gray: #64748b;
            --light-gray: #f8fafc;
        }

        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            overflow-x: hidden;
        }

        /* Navbar */
        .navbar-landing {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0,0,0,0.05);
        }
        .navbar-landing .nav-link {
            font-weight: 500;
            color: #475569;
            transition: color 0.3s;
        }
        .navbar-landing .nav-link:hover {
            color: var(--primary);
        }

        /* Hero */
        .hero-section {
            min-height: 100vh;
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%);
            padding-top: 100px;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        .hero-blob-1 {
            position: absolute;
            top: 10%;
            right: -5%;
            width: 400px;
            height: 400px;
            background: rgba(37,99,235,0.08);
            border-radius: 50%;
            filter: blur(60px);
        }
        .hero-blob-2 {
            position: absolute;
            bottom: 10%;
            left: -5%;
            width: 300px;
            height: 300px;
            background: rgba(59,130,246,0.06);
            border-radius: 50%;
            filter: blur(50px);
        }
        .hero-title {
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--dark);
            line-height: 1.1;
        }
        .hero-title span {
            color: var(--primary);
        }
        .hero-card {
            background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
            border-radius: 30px;
            padding: 40px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 30px 60px rgba(37,99,235,0.2);
        }
        .stat-card {
            background: rgba(255,255,255,0.7);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            padding: 20px;
            text-align: center;
            border: 1px solid rgba(37,99,235,0.1);
            transition: transform 0.3s;
        }
        .stat-card:hover {
            transform: translateY(-5px);
        }
        .stat-number {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--primary);
        }

        /* Services */
        .service-card {
            background: var(--light-gray);
            border-radius: 24px;
            padding: 35px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            cursor: pointer;
            height: 100%;
        }
        .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(37,99,235,0.1);
        }
        .service-card.featured {
            background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
            color: white;
        }
        .service-card.featured:hover {
            box-shadow: 0 20px 40px rgba(37,99,235,0.3);
        }
        .service-number {
            font-size: 3rem;
            font-weight: 200;
            color: #cbd5e1;
            margin-bottom: 15px;
        }
        .service-card.featured .service-number {
            opacity: 0.3;
        }
        .service-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #eff6ff, #dbeafe);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .service-card.featured .service-icon {
            background: rgba(255,255,255,0.2);
        }
        .service-icon i {
            color: var(--primary);
            font-size: 1.2rem;
        }
        .service-card.featured .service-icon i {
            color: white;
        }

        /* Stats dark section */
        .stats-section {
            padding: 100px 0;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            position: relative;
            overflow: hidden;
        }
        .stats-section .stat-box {
            background: rgba(255,255,255,0.05);
            border-radius: 20px;
            padding: 35px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.1);
            transition: transform 0.3s;
        }
        .stats-section .stat-box:hover {
            transform: translateY(-5px);
        }
        .stats-section .stat-box-number {
            font-size: 3rem;
            font-weight: 800;
            color: #60a5fa;
        }

        /* CTA */
        .cta-section {
            padding: 80px 0;
            background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
            text-align: center;
        }

        /* Footer */
        .footer-landing {
            background: #0f172a;
            padding: 60px 0 30px;
            color: #94a3b8;
        }
        .footer-landing a {
            color: #94a3b8;
            text-decoration: none;
            transition: color 0.3s;
        }
        .footer-landing a:hover {
            color: var(--primary-light);
        }
        .social-icon {
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            transition: all 0.3s;
        }
        .social-icon:hover {
            background: var(--primary);
            color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }
        }
    </style>
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-landing">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center gap-2" href="#" style="font-weight: 800; font-size: 1.4rem; color: var(--primary);">
                <i class="fas fa-hospital"></i>
                MediCare
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="navbar-nav mx-auto gap-3">
                    <li class="nav-item"><a class="nav-link" href="#hero">Accueil</a></li>
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#stats">Chiffres</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
                <div class="d-flex gap-2">
                    <a href="{{ route('login') }}" class="btn btn-outline-primary rounded-pill px-4" style="font-weight: 600; border-width: 2px;">Connexion</a>
                    <a href="{{ route('login') }}" class="btn btn-primary rounded-pill px-4" style="font-weight: 600; background: var(--primary); border: none;">Espace Pro</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero-section">
        <div class="hero-blob-1"></div>
        <div class="hero-blob-2"></div>
        
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6" style="z-index: 2;">
                    <div class="mb-3">
                        <span style="background: rgba(37,99,235,0.1); color: var(--primary); padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
                            <i class="fas fa-shield-alt me-1"></i> Système de gestion hospitalière
                        </span>
                    </div>
                    <h1 class="hero-title">
                        Innovation<br>
                        <span>Clinic</span>
                    </h1>
                    <p style="font-size: 1.15rem; color: var(--gray); line-height: 1.7; max-width: 500px; margin-bottom: 2rem;">
                        Nous combinons des technologies innovantes avec une approche humaine pour que chaque patient se sente en confiance et serein.
                    </p>
                    <div class="d-flex gap-3 flex-wrap">
                        <a href="{{ route('login') }}" class="btn btn-primary btn-lg rounded-pill px-5" style="background: var(--primary); border: none; font-weight: 600; box-shadow: 0 10px 30px rgba(37,99,235,0.3);">
                            <i class="fas fa-user-md me-2"></i>Espace Personnel
                        </a>
                        <a href="#services" class="btn btn-outline-dark btn-lg rounded-pill px-4" style="font-weight: 600; border-width: 2px;">
                            <i class="fas fa-play-circle me-2"></i>Découvrir
                        </a>
                    </div>
                    
                    <!-- Mini stats -->
                    <div class="row mt-5 g-3">
                        <div class="col-4">
                            <div class="stat-card">
                                <div class="stat-number">10+</div>
                                <div style="font-size: 0.8rem; color: var(--gray); font-weight: 500;">Années d'expérience</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="stat-card">
                                <div class="stat-number">20+</div>
                                <div style="font-size: 0.8rem; color: var(--gray); font-weight: 500;">Médecins qualifiés</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="stat-card">
                                <div class="stat-number">100%</div>
                                <div style="font-size: 0.8rem; color: var(--gray); font-weight: 500;">Diagnostic digital</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6 d-none d-lg-block" style="position: relative;">
                    <div style="position: relative; z-index: 2;">
                        <div class="hero-card">
                            <div style="position: absolute; top: -20px; right: -20px; width: 150px; height: 150px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
                            <div style="position: absolute; bottom: -30px; left: -30px; width: 200px; height: 200px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
                            
                            <div class="text-white mb-4">
                                <h3 style="font-weight: 700; font-size: 1.5rem;">Avec des technologies avancées</h3>
                                <p style="opacity: 0.9; font-size: 0.95rem;">L'équipement de nouvelle génération, digital et précis pour votre santé.</p>
                            </div>
                            
                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                <span style="background: rgba(255,255,255,0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 500;">
                                    <i class="fas fa-check-circle me-1"></i> Fiabilité
                                </span>
                                <span style="background: rgba(255,255,255,0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 500;">
                                    <i class="fas fa-star me-1"></i> Expérience
                                </span>
                                <span style="background: rgba(255,255,255,0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 500;">
                                    <i class="fas fa-certificate me-1"></i> Professionnel
                                </span>
                            </div>
                            
                            <div class="mt-4 d-flex align-items-center gap-2">
                                <div style="display: flex; margin-left: 8px;">
                                    <div style="width: 40px; height: 40px; border-radius: 50%; background: #e0e7ff; border: 3px solid white; margin-left: -8px; display: flex; align-items: center; justify-content: center; color: var(--primary); font-weight: 700; font-size: 0.8rem;">JD</div>
                                    <div style="width: 40px; height: 40px; border-radius: 50%; background: #dbeafe; border: 3px solid white; margin-left: -8px; display: flex; align-items: center; justify-content: center; color: var(--primary); font-weight: 700; font-size: 0.8rem;">ML</div>
                                    <div style="width: 40px; height: 40px; border-radius: 50%; background: #bfdbfe; border: 3px solid white; margin-left: -8px; display: flex; align-items: center; justify-content: center; color: var(--primary); font-weight: 700; font-size: 0.8rem;">AK</div>
                                    <div style="width: 40px; height: 40px; border-radius: 50%; background: #93c5fd; border: 3px solid white; margin-left: -8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.8rem;">+5</div>
                                </div>
                                <span style="color: white; font-size: 0.9rem; font-weight: 500;">Équipe médicale</span>
                            </div>
                        </div>
                        
                        <!-- Floating card -->
                        <div style="position: absolute; bottom: -30px; right: -20px; background: white; border-radius: 20px; padding: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); z-index: 10; max-width: 220px;">
                            <div class="d-flex align-items-center gap-3 mb-2">
                                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #2563eb, #3b82f6); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                                    <i class="fas fa-heartbeat text-white" style="font-size: 1.2rem;"></i>
                                </div>
                                <div>
                                    <div style="font-weight: 700; color: var(--dark);">95%</div>
                                    <div style="font-size: 0.75rem; color: var(--gray);">Patients satisfaits</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" style="padding: 100px 0; background: #ffffff;">
        <div class="container">
            <div class="text-center mb-5">
                <span style="color: var(--primary); font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px;">Nos Services</span>
                <h2 style="font-size: 2.5rem; font-weight: 800; color: var(--dark); margin-top: 10px;">Ce que nous offrons</h2>
                <p style="color: var(--gray); max-width: 500px; margin: 15px auto;">Une gamme complète de services médicaux — de la consultation au diagnostic et au traitement.</p>
            </div>
            
            <div class="row g-4">
                <!-- Service 1 -->
                <div class="col-md-6 col-lg-4">
                    <div class="service-card">
                        <div class="service-number">01</div>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="service-icon">
                                <i class="fas fa-stethoscope"></i>
                            </div>
                            <h4 style="font-weight: 700; color: var(--dark); margin: 0;">Médecine générale</h4>
                        </div>
                        <p style="color: var(--gray); font-size: 0.95rem; line-height: 1.6;">Consultations complètes et suivi personnalisé pour toute la famille.</p>
                        <a href="#" style="color: var(--primary); text-decoration: none; font-weight: 600; font-size: 0.9rem;">Prendre rendez-vous <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
                
                <!-- Service 2 -->
                <div class="col-md-6 col-lg-4">
                    <div class="service-card featured">
                        <div class="service-number">02</div>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="service-icon">
                                <i class="fas fa-baby"></i>
                            </div>
                            <h4 style="font-weight: 700; margin: 0;">Pédiatrie</h4>
                        </div>
                        <p style="opacity: 0.9; font-size: 0.95rem; line-height: 1.6;">Soins spécialisés pour les enfants, dans un environnement chaleureux et rassurant.</p>
                        <a href="#" style="color: white; text-decoration: none; font-weight: 600; font-size: 0.9rem;">Prendre rendez-vous <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
                
                <!-- Service 3 -->
                <div class="col-md-6 col-lg-4">
                    <div class="service-card">
                        <div class="service-number">03</div>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="service-icon">
                                <i class="fas fa-female"></i>
                            </div>
                            <h4 style="font-weight: 700; color: var(--dark); margin: 0;">Santé féminine</h4>
                        </div>
                        <p style="color: var(--gray); font-size: 0.95rem; line-height: 1.6;">Suivi gynécologique complet et accompagnement personnalisé.</p>
                        <a href="#" style="color: var(--primary); text-decoration: none; font-weight: 600; font-size: 0.9rem;">Prendre rendez-vous <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
                
                <!-- Service 4 -->
                <div class="col-md-6 col-lg-4">
                    <div class="service-card">
                        <div class="service-number">04</div>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="service-icon">
                                <i class="fas fa-heart"></i>
                            </div>
                            <h4 style="font-weight: 700; color: var(--dark); margin: 0;">Cardiologie</h4>
                        </div>
                        <p style="color: var(--gray); font-size: 0.95rem; line-height: 1.6;">Diagnostic et traitement des maladies cardiovasculaires avec équipement de pointe.</p>
                        <a href="#" style="color: var(--primary); text-decoration: none; font-weight: 600; font-size: 0.9rem;">Prendre rendez-vous <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
                
                <!-- Service 5 -->
                <div class="col-md-6 col-lg-4">
                    <div class="service-card">
                        <div class="service-number">05</div>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="service-icon">
                                <i class="fas fa-flask"></i>
                            </div>
                            <h4 style="font-weight: 700; color: var(--dark); margin: 0;">Laboratoire</h4>
                        </div>
                        <p style="color: var(--gray); font-size: 0.95rem; line-height: 1.6;">Analyses biologiques complètes avec résultats rapides et précis.</p>
                        <a href="#" style="color: var(--primary); text-decoration: none; font-weight: 600; font-size: 0.9rem;">Prendre rendez-vous <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
                
                <!-- Service 6 -->
                <div class="col-md-6 col-lg-4">
                    <div class="service-card">
                        <div class="service-number">06</div>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="service-icon">
                                <i class="fas fa-x-ray"></i>
                            </div>
                            <h4 style="font-weight: 700; color: var(--dark); margin: 0;">Imagerie médicale</h4>
                        </div>
                        <p style="color: var(--gray); font-size: 0.95rem; line-height: 1.6;">Radiographie, échographie et IRM avec technologies de dernière génération.</p>
                        <a href="#" style="color: var(--primary); text-decoration: none; font-weight: 600; font-size: 0.9rem;">Prendre rendez-vous <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section id="stats" class="stats-section">
        <div style="position: absolute; top: -50px; right: -50px; width: 300px; height: 300px; background: rgba(37,99,235,0.1); border-radius: 50%;"></div>
        <div style="position: absolute; bottom: -50px; left: -50px; width: 250px; height: 250px; background: rgba(37,99,235,0.05); border-radius: 50%;"></div>
        
        <div class="container" style="position: relative; z-index: 2;">
            <div class="row align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <span style="color: #60a5fa; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px;">Pourquoi nous choisir</span>
                    <h2 style="font-size: 2.5rem; font-weight: 800; color: white; margin-top: 15px; line-height: 1.2;">Des soins de qualité pour tous</h2>
                    <p style="color: #94a3b8; margin-top: 20px; line-height: 1.7;">Notre plateforme connecte patients et professionnels de santé dans un écosystème digital sécurisé et intuitif.</p>
                    
                    <div class="mt-4">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div style="width: 40px; height: 40px; background: rgba(37,99,235,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-user-md" style="color: #60a5fa;"></i>
                            </div>
                            <span style="color: #e2e8f0; font-weight: 500;">Médecins expérimentés</span>
                        </div>
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div style="width: 40px; height: 40px; background: rgba(37,99,235,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-microscope" style="color: #60a5fa;"></i>
                            </div>
                            <span style="color: #e2e8f0; font-weight: 500;">Équipement moderne</span>
                        </div>
                        <div class="d-flex align-items-center gap-3">
                            <div style="width: 40px; height: 40px; background: rgba(37,99,235,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-shield-alt" style="color: #60a5fa;"></i>
                            </div>
                            <span style="color: #e2e8f0; font-weight: 500;">Données sécurisées (RGPD)</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-7">
                    <div class="row g-4">
                        <div class="col-6">
                            <div class="stat-box">
                                <div class="stat-box-number">10+</div>
                                <div style="color: #94a3b8; font-size: 0.95rem; margin-top: 8px;">Années d'expérience</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="stat-box">
                                <div class="stat-box-number">15+</div>
                                <div style="color: #94a3b8; font-size: 0.95rem; margin-top: 8px;">Spécialités médicales</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="stat-box">
                                <div class="stat-box-number">95%</div>
                                <div style="color: #94a3b8; font-size: 0.95rem; margin-top: 8px;">Patients satisfaits</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="stat-box">
                                <div class="stat-box-number">98%</div>
                                <div style="color: #94a3b8; font-size: 0.95rem; margin-top: 8px;">Diagnostic précis</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2 style="font-size: 2.5rem; font-weight: 800; color: white; margin-bottom: 20px;">Prêt à moderniser votre clinique ?</h2>
            <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; max-width: 600px; margin: 0 auto 30px;">Rejoignez les établissements de santé qui font confiance à MediCare pour leur gestion quotidienne.</p>
            <div class="d-flex gap-3 justify-content-center flex-wrap">
                <a href="{{ route('login') }}" class="btn btn-light btn-lg rounded-pill px-5" style="font-weight: 700; color: var(--primary);">
                    <i class="fas fa-rocket me-2"></i>Démarrer gratuitement
                </a>
                <a href="#contact" class="btn btn-outline-light btn-lg rounded-pill px-4" style="font-weight: 600; border-width: 2px;">
                    <i class="fas fa-phone me-2"></i>Nous contacter
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="footer-landing">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-4">
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <i class="fas fa-hospital" style="color: var(--primary); font-size: 1.5rem;"></i>
                        <span style="font-weight: 800; font-size: 1.3rem; color: white;">MediCare</span>
                    </div>
                    <p style="line-height: 1.7;">Solution complète de gestion hospitalière. Simplifiez vos processus médicaux et améliorez l'expérience patient.</p>
                    <div class="d-flex gap-3 mt-3">
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                <div class="col-lg-2 col-6">
                    <h5 style="color: white; font-weight: 700; margin-bottom: 20px;">Services</h5>
                    <ul class="list-unstyled" style="line-height: 2.2;">
                        <li><a href="#">Consultation</a></li>
                        <li><a href="#">Laboratoire</a></li>
                        <li><a href="#">Imagerie</a></li>
                        <li><a href="#">Pharmacie</a></li>
                    </ul>
                </div>
                
                <div class="col-lg-2 col-6">
                    <h5 style="color: white; font-weight: 700; margin-bottom: 20px;">Entreprise</h5>
                    <ul class="list-unstyled" style="line-height: 2.2;">
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Équipe</a></li>
                        <li><a href="#">Carrières</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                
                <div class="col-lg-4">
                    <h5 style="color: white; font-weight: 700; margin-bottom: 20px;">Contact</h5>
                    <div style="line-height: 2.2;">
                        <div><i class="fas fa-map-marker-alt me-2" style="color: var(--primary);"></i> 123 Avenue de la Santé, Paris</div>
                        <div><i class="fas fa-phone me-2" style="color: var(--primary);"></i> +33 1 23 45 67 89</div>
                        <div><i class="fas fa-envelope me-2" style="color: var(--primary);"></i> contact@medicare.fr</div>
                    </div>
                </div>
            </div>
            
            <hr style="border-color: rgba(255,255,255,0.1); margin: 40px 0 20px;">
            <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <p class="mb-0" style="font-size: 0.9rem;">© {{ date('Y') }} MediCare. Tous droits réservés.</p>
                <div class="d-flex gap-4" style="font-size: 0.9rem;">
                    <a href="#">Confidentialité</a>
                    <a href="#">Conditions</a>
                    <a href="#">RGPD</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>