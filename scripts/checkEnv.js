// ┌────────────────────────────────────────────────────────────┐
// │ VALIDACIÓN DEFENSIVA DE ENTORNO Y ESTRUCTURA – QUANTAWOOD │
// └────────────────────────────────────────────────────────────┘

const fs = require('fs');
const path = require('path');
const semver = require('semver');
const { execSync } = require('child_process');

// ─────────────────────────────────────────────────────────────
// 🧠 Requisitos técnicos mínimos
const requiredNode = '>=18.0.0';
const requiredNpm = '>=9.0.0';

// ─────────────────────────────────────────────────────────────
// ✅ Validación de versiones
function validateVersion(name, current, required) {
    if (!semver.satisfies(current, required)) {
        console.error(`❌ ${name} ${required} requerido. Tienes ${current}`);
        process.exit(1);
    } else {
        console.log(`✅ ${name} compatible: ${current}`);
    }
}

const nodeVersion = process.version;
const npmVersion = execSync('npm -v').toString().trim();
validateVersion('Node.js', nodeVersion, requiredNode);
validateVersion('npm', npmVersion, requiredNpm);

// ─────────────────────────────────────────────────────────────
// 🔍 Validación de herramientas clave
console.log('\n🔍 Verificando herramientas técnicas...');
const tools = ['npx vite --version', 'npx tailwindcss --version'];
try {
    tools.forEach(cmd => execSync(cmd, { stdio: 'inherit' }));
} catch (e) {
    console.error('❌ Error al verificar herramientas. Revisa tu instalación.');
    process.exit(1);
}

// ─────────────────────────────────────────────────────────────
// 📁 Validación de estructura de carpetas y archivos
console.log('\n📁 Validando estructura de carpetas y archivos clave...');

const requiredPaths = [
    'src',
    'src/components',
    'src/theme.scss',
    'src/pages',
    'src/hooks',
    'src/context',
    'src/router.jsx',
    'src/App.jsx',
    'src/main.jsx',
    'src/assets/react.svg'
];

let missing = [];

requiredPaths.forEach(relPath => {
    const fullPath = path.join(process.cwd(), relPath);
    if (!fs.existsSync(fullPath)) {
        missing.push(relPath);
    } else {
        console.log(`✅ Existe: ${relPath}`);
    }
});

if (missing.length > 0) {
    console.log('\n⚠️ Elementos faltantes detectados:');
    missing.forEach(item => console.log(`❌ Falta: ${item}`));
    console.log('\n🛠️ Revisa tu estructura antes de continuar con el desarrollo.');
    process.exit(1);
}

// ─────────────────────────────────────────────────────────────
// 🎯 Log visual para onboarding multicultural
console.log('\n🎯 Entorno validado correctamente para QUANTAWOOD');
console.log('🌍 Compatible con flujos defensivos y equipos multiculturales');
console.log('📘 Puedes iniciar con: npm run dev');
console.log('🧩 Documentación recomendada: docs/README.onboarding.md\n');