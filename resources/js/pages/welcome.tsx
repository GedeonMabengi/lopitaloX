import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    Baby,
    BadgeCheck,
    CircleCheck,
    CirclePlay,
    FlaskConical,
    Heart,
    HeartHandshake,
    HeartPulse,
    Hospital,
    Mail,
    MapPin,
    Menu,
    Microscope,
    Phone,
    Rocket,
    ScanLine,
    ShieldCheck,
    Star,
    Stethoscope,
    UserRound,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { dashboard, login } from '@/routes';

const links = [
    { href: '#hero', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#stats', label: 'Chiffres' },
    { href: '#contact', label: 'Contact' },
];

const services = [
    {
        icon: Stethoscope,
        title: 'Médecine générale',
        text: 'Consultations complètes et suivi personnalisé pour toute la famille.',
    },
    {
        icon: Baby,
        title: 'Pédiatrie',
        text: 'Soins spécialisés pour les enfants, dans un environnement chaleureux et rassurant.',
        featured: true,
    },
    {
        icon: HeartHandshake,
        title: 'Santé féminine',
        text: 'Suivi gynécologique complet et accompagnement personnalisé.',
    },
    {
        icon: Heart,
        title: 'Cardiologie',
        text: 'Diagnostic et traitement des maladies cardiovasculaires avec équipement de pointe.',
    },
    {
        icon: FlaskConical,
        title: 'Laboratoire',
        text: 'Analyses biologiques complètes avec résultats rapides et précis.',
    },
    {
        icon: ScanLine,
        title: 'Imagerie médicale',
        text: 'Radiographie, échographie et IRM avec technologies de dernière génération.',
    },
];

const heroStats = [
    { value: '10+', label: "Années d'expérience" },
    { value: '20+', label: 'Médecins qualifiés' },
    { value: '100%', label: 'Diagnostic digital' },
];

const stats = [
    { value: '10+', label: "Années d'expérience" },
    { value: '15+', label: 'Spécialités médicales' },
    { value: '95%', label: 'Patients satisfaits' },
    { value: '98%', label: 'Diagnostic précis' },
];

const reasons = [
    { icon: UserRound, label: 'Médecins expérimentés' },
    { icon: Microscope, label: 'Équipement moderne' },
    { icon: ShieldCheck, label: 'Données sécurisées (RGPD)' },
];

const footerColumns = [
    {
        heading: 'Services',
        items: ['Consultation', 'Laboratoire', 'Imagerie', 'Pharmacie'],
    },
    {
        heading: 'Entreprise',
        items: ['À propos', 'Équipe', 'Carrières', 'Blog'],
    },
];

export default function Welcome() {
    const { auth } = usePage().props;
    const [menuOpen, setMenuOpen] = useState(false);
    // Connecté : on mène directement à l'application plutôt qu'à la connexion
    const appHref = auth.user ? dashboard() : login();

    return (
        <>
            <Head title="Gestion Hospitalière" />
            <div className="overflow-x-hidden [scroll-behavior:smooth] bg-white text-slate-800 antialiased">
                {/* Navigation */}
                <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-[0_2px_20px_rgba(0,0,0,0.05)] backdrop-blur">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
                        <a
                            href="#hero"
                            className="flex items-center gap-2 text-xl font-extrabold text-blue-600"
                        >
                            <Hospital className="size-6" />
                            MediCare
                        </a>

                        <button
                            type="button"
                            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                            aria-expanded={menuOpen}
                            aria-label="Ouvrir le menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <Menu className="size-5" />
                        </button>

                        <div
                            className={cn(
                                'absolute inset-x-0 top-full flex-col gap-4 bg-white px-4 pb-6 shadow-md lg:static lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-between lg:bg-transparent lg:p-0 lg:pl-12 lg:shadow-none',
                                menuOpen ? 'flex' : 'hidden',
                            )}
                        >
                            <ul className="flex flex-col gap-3 lg:mx-auto lg:flex-row lg:gap-8">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="font-medium text-slate-600 transition hover:text-blue-600"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-2">
                                {auth.user ? (
                                    <Link
                                        href={dashboard()}
                                        className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                                    >
                                        Tableau de bord
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={login()}
                                            className="rounded-full border-2 border-blue-600 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                                        >
                                            Connexion
                                        </Link>
                                        <Link
                                            href={login()}
                                            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                                        >
                                            Espace Pro
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero */}
                <section
                    id="hero"
                    className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-blue-50 via-blue-100 to-blue-200 pt-28 pb-16"
                >
                    <div className="absolute top-[10%] -right-[5%] size-96 rounded-full bg-blue-600/10 blur-3xl" />
                    <div className="absolute bottom-[10%] -left-[5%] size-72 rounded-full bg-blue-500/5 blur-3xl" />

                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
                        <div>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/10 px-4 py-1.5 text-sm font-semibold text-blue-600">
                                <ShieldCheck className="size-4" />
                                Système de gestion hospitalière
                            </span>
                            <h1 className="mt-4 text-5xl leading-tight font-extrabold text-slate-800 md:text-6xl">
                                Innovation
                                <br />
                                <span className="text-blue-600">Clinic</span>
                            </h1>
                            <p className="mt-6 mb-8 max-w-lg text-lg leading-relaxed text-slate-500">
                                Nous combinons des technologies innovantes avec
                                une approche humaine pour que chaque patient se
                                sente en confiance et serein.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href={appHref}
                                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition hover:bg-blue-700"
                                >
                                    <UserRound className="size-5" />
                                    Espace Personnel
                                </Link>
                                <a
                                    href="#services"
                                    className="inline-flex items-center gap-2 rounded-full border-2 border-slate-800 px-6 py-3 text-lg font-semibold text-slate-800 transition hover:bg-slate-800 hover:text-white"
                                >
                                    <CirclePlay className="size-5" />
                                    Découvrir
                                </a>
                            </div>

                            <div className="mt-12 grid grid-cols-3 gap-3">
                                {heroStats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-2xl border border-blue-600/10 bg-white/70 p-5 text-center backdrop-blur transition hover:-translate-y-1"
                                    >
                                        <div className="text-3xl font-extrabold text-blue-600">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs font-medium text-slate-500">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="relative overflow-hidden rounded-[30px] bg-linear-to-br from-blue-600 to-blue-500 p-10 shadow-[0_30px_60px_rgba(37,99,235,0.2)]">
                                <div className="absolute -top-5 -right-5 size-36 rounded-full bg-white/10" />
                                <div className="absolute -bottom-8 -left-8 size-48 rounded-full bg-white/5" />

                                <div className="relative mb-6 text-white">
                                    <h3 className="text-2xl font-bold">
                                        Avec des technologies avancées
                                    </h3>
                                    <p className="mt-2 text-sm opacity-90">
                                        L'équipement de nouvelle génération,
                                        digital et précis pour votre santé.
                                    </p>
                                </div>

                                <div className="relative flex flex-wrap gap-2.5">
                                    {[
                                        {
                                            icon: CircleCheck,
                                            label: 'Fiabilité',
                                        },
                                        { icon: Star, label: 'Expérience' },
                                        {
                                            icon: BadgeCheck,
                                            label: 'Professionnel',
                                        },
                                    ].map((tag) => (
                                        <span
                                            key={tag.label}
                                            className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white"
                                        >
                                            <tag.icon className="size-4" />
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>

                                <div className="relative mt-6 flex items-center gap-3">
                                    <div className="flex pl-2">
                                        {[
                                            {
                                                initials: 'JD',
                                                color: 'bg-indigo-100',
                                            },
                                            {
                                                initials: 'ML',
                                                color: 'bg-blue-100',
                                            },
                                            {
                                                initials: 'AK',
                                                color: 'bg-blue-200',
                                            },
                                            {
                                                initials: '+5',
                                                color: 'bg-blue-300 text-white',
                                            },
                                        ].map((member) => (
                                            <div
                                                key={member.initials}
                                                className={cn(
                                                    '-ml-2 flex size-10 items-center justify-center rounded-full border-[3px] border-white text-xs font-bold text-blue-600',
                                                    member.color,
                                                )}
                                            >
                                                {member.initials}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-white">
                                        Équipe médicale
                                    </span>
                                </div>
                            </div>

                            <div className="absolute -right-5 -bottom-8 z-10 flex max-w-56 items-center gap-3 rounded-2xl bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                                <div className="flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-blue-500">
                                    <HeartPulse className="size-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-800">
                                        95%
                                    </div>
                                    <div className="text-xs text-slate-500">
                                        Patients satisfaits
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="bg-white py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="mb-12 text-center">
                            <span className="text-sm font-semibold tracking-[2px] text-blue-600 uppercase">
                                Nos Services
                            </span>
                            <h2 className="mt-2 text-4xl font-extrabold text-slate-800">
                                Ce que nous offrons
                            </h2>
                            <p className="mx-auto mt-4 max-w-lg text-slate-500">
                                Une gamme complète de services médicaux — de la
                                consultation au diagnostic et au traitement.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {services.map((service, index) => (
                                <div
                                    key={service.title}
                                    className={cn(
                                        'h-full rounded-3xl border p-9 transition duration-300 hover:-translate-y-2',
                                        service.featured
                                            ? 'border-transparent bg-linear-to-br from-blue-600 to-blue-500 text-white hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)]'
                                            : 'border-slate-200 bg-slate-50 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)]',
                                    )}
                                >
                                    <div
                                        className={cn(
                                            'mb-4 text-5xl font-extralight',
                                            service.featured
                                                ? 'opacity-30'
                                                : 'text-slate-300',
                                        )}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div
                                            className={cn(
                                                'flex size-12 items-center justify-center rounded-xl',
                                                service.featured
                                                    ? 'bg-white/20'
                                                    : 'bg-linear-to-br from-blue-50 to-blue-100',
                                            )}
                                        >
                                            <service.icon
                                                className={cn(
                                                    'size-5',
                                                    service.featured
                                                        ? 'text-white'
                                                        : 'text-blue-600',
                                                )}
                                            />
                                        </div>
                                        <h3
                                            className={cn(
                                                'text-xl font-bold',
                                                !service.featured &&
                                                    'text-slate-800',
                                            )}
                                        >
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p
                                        className={cn(
                                            'leading-relaxed',
                                            service.featured
                                                ? 'opacity-90'
                                                : 'text-slate-500',
                                        )}
                                    >
                                        {service.text}
                                    </p>
                                    <Link
                                        href={appHref}
                                        className={cn(
                                            'mt-4 inline-flex items-center gap-1 text-sm font-semibold hover:underline',
                                            service.featured
                                                ? 'text-white'
                                                : 'text-blue-600',
                                        )}
                                    >
                                        Prendre rendez-vous{' '}
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Chiffres */}
                <section
                    id="stats"
                    className="relative overflow-hidden bg-linear-to-br from-slate-800 to-slate-700 py-24"
                >
                    <div className="absolute -top-12 -right-12 size-72 rounded-full bg-blue-600/10" />
                    <div className="absolute -bottom-12 -left-12 size-64 rounded-full bg-blue-600/5" />

                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
                        <div className="lg:col-span-5">
                            <span className="text-sm font-semibold tracking-[2px] text-blue-400 uppercase">
                                Pourquoi nous choisir
                            </span>
                            <h2 className="mt-4 text-4xl leading-tight font-extrabold text-white">
                                Des soins de qualité pour tous
                            </h2>
                            <p className="mt-5 leading-relaxed text-slate-400">
                                Notre plateforme connecte patients et
                                professionnels de santé dans un écosystème
                                digital sécurisé et intuitif.
                            </p>

                            <ul className="mt-6 space-y-3">
                                {reasons.map((reason) => (
                                    <li
                                        key={reason.label}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex size-10 items-center justify-center rounded-lg bg-blue-600/20">
                                            <reason.icon className="size-5 text-blue-400" />
                                        </span>
                                        <span className="font-medium text-slate-200">
                                            {reason.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-6 lg:col-span-7">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-white/10 bg-white/5 p-9 text-center transition hover:-translate-y-1"
                                >
                                    <div className="text-5xl font-extrabold text-blue-400">
                                        {stat.value}
                                    </div>
                                    <div className="mt-2 text-slate-400">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Appel à l'action */}
                <section className="bg-linear-to-br from-blue-600 to-blue-500 py-20 text-center">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <h2 className="mb-5 text-4xl font-extrabold text-white">
                            Prêt à moderniser votre clinique ?
                        </h2>
                        <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
                            Rejoignez les établissements de santé qui font
                            confiance à MediCare pour leur gestion quotidienne.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                href={appHref}
                                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-bold text-blue-600 transition hover:bg-blue-50"
                            >
                                <Rocket className="size-5" />
                                Démarrer gratuitement
                            </Link>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-600"
                            >
                                <Phone className="size-5" />
                                Nous contacter
                            </a>
                        </div>
                    </div>
                </section>

                {/* Pied de page */}
                <footer
                    id="contact"
                    className="bg-slate-900 pt-16 pb-8 text-slate-400"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
                            <div className="lg:col-span-4">
                                <div className="mb-4 flex items-center gap-2">
                                    <Hospital className="size-6 text-blue-600" />
                                    <span className="text-xl font-extrabold text-white">
                                        MediCare
                                    </span>
                                </div>
                                <p className="leading-relaxed">
                                    Solution complète de gestion hospitalière.
                                    Simplifiez vos processus médicaux et
                                    améliorez l'expérience patient.
                                </p>
                            </div>

                            {footerColumns.map((column) => (
                                <div
                                    key={column.heading}
                                    className="lg:col-span-2"
                                >
                                    <h3 className="mb-5 font-bold text-white">
                                        {column.heading}
                                    </h3>
                                    <ul className="space-y-2">
                                        {column.items.map((item) => (
                                            <li key={item}>
                                                <a
                                                    href="#"
                                                    className="transition hover:text-blue-400"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="lg:col-span-4">
                                <h3 className="mb-5 font-bold text-white">
                                    Contact
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <MapPin className="size-4 text-blue-600" />
                                        123 Avenue de la Santé, Paris
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Phone className="size-4 text-blue-600" />
                                        +33 1 23 45 67 89
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Mail className="size-4 text-blue-600" />
                                        contact@medicare.fr
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-sm">
                            <p>
                                © {new Date().getFullYear()} MediCare. Tous
                                droits réservés.
                            </p>
                            <div className="flex gap-6">
                                {['Confidentialité', 'Conditions', 'RGPD'].map(
                                    (item) => (
                                        <a
                                            key={item}
                                            href="#"
                                            className="transition hover:text-blue-400"
                                        >
                                            {item}
                                        </a>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
