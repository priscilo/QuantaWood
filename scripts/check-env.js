// ┌────────────────────────────────────────────┐
// │ VALIDACIÓN DEFENSIVA DE ENTORNO QUANTAWOOD │
// └────────────────────────────────────────────┘

const semver = require('semver');
const { execSync } = require('child_process');

// Requisitos mínimos
const requiredNode = '>=18.0.0';
const requiredNpm = '>=9.0.0';

// Función para validar versión
function validateVersion(name, current, required) {
    if (!semver.satisfies(current, required)) {
        console.error(`❌ ${name} ${required} requerido. Tienes ${current}`);
        process.exit(1);
    } else {
        console.log(`✅ ${name} compatible: ${current}`);
    }
}

// Validar Node.js
const nodeVersion = process.version;
validateVersion('Node.js', nodeVersion, requiredNode);

// Validar npm
const npmVersion = execSync('npm -v').toString().trim();
validateVersion('npm', npmVersion, requiredNpm);

// Validar herramientas clave
const tools = ['node -v', 'npm -v', 'npx vite --version', 'npx tailwindcss --version'];

try {
    console.log('\n🔍 Verificando herramientas técnicas...');
    tools.forEach(cmd => execSync(cmd, { stdio: 'inherit' }));
    console.log('\n🎯 Entorno técnico validado correctamente para QUANTAWOOD.');
} catch (e) {
    console.error('\n❌ Error en la validación del entorno. Revisa tus herramientas instaladas o tu PATH.');
    process.exit(1);
}