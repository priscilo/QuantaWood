// src/card/BatchPerformanceCard.tsx

import React from 'react';
import styles from './BatchPerformanceCard.module.scss';

export interface BatchPerformanceCardProps {
    batchId: string;
    estimatedVolume: number;
    processedVolume: number;
    processingTime: number; // en minutos
    wastePercentage: number;
    status: 'activo' | 'completado' | 'pendiente';
}

export const BatchPerformanceCard: React.FC<BatchPerformanceCardProps> = ({
    batchId,
    estimatedVolume,
    processedVolume,
    processingTime,
    wastePercentage,
    status,
}) => {
    // Validación defensiva
    const isValid =
        batchId &&
        estimatedVolume >= 0 &&
        processedVolume >= 0 &&
        processingTime >= 0 &&
        wastePercentage >= 0;

    if (!isValid) {
        return (
            <div className={styles.cardError}>
                <strong>Error:</strong> Datos inválidos para el lote #{batchId}
            </div>
        );
    }

    return (
        <div className={styles.card}>
            <header className={styles.header}>
                <h3>Lote #{batchId}</h3>
                <span className={`${styles.status} ${styles[status]}`}>{status}</span>
            </header>
            <ul className={styles.metrics}>
                <li><strong>Volumen estimado:</strong> {estimatedVolume.toFixed(2)} m³</li>
                <li><strong>Volumen procesado:</strong> {processedVolume.toFixed(2)} m³</li>
                <li><strong>Tiempo de procesamiento:</strong> {processingTime} min</li>
                <li><strong>Desperdicio:</strong> {wastePercentage.toFixed(1)}%</li>
            </ul>
        </div>
    );
};

export default BatchPerformanceCard;