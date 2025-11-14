export const BatchPerformanceDashboard: React.FC = () => {
    const [batches, setBatches] = useState<BatchPerformanceCardProps[]>([]);
    const [filtered, setFiltered] = useState<BatchPerformanceCardProps[]>([]);

    useEffect(() => {
        // Simulación de carga defensiva
        fetch('/api/batches')
            .then(res => res.json())
            .then(data => {
                const validData = data.filter((b: any) => b.batchId && b.estimatedVolume >= 0);
                setBatches(validData);
                setFiltered(validData);
            })
            .catch(() => setBatches([]));
    }, []);

    const handleFilterChange = (filters: { status?: string }) => {
        const result = batches.filter(b =>
            filters.status ? b.status === filters.status : true
        );
        setFiltered(result);
    };

    return (
        <div className="dashboard">
            <BatchFilter onFilterChange={handleFilterChange} />
            <PerformanceSummary batches={filtered} />
            {filtered.map(batch => (
                <BatchPerformanceCard key={batch.batchId} {...batch} />
            ))}
        </div>
    );
}; import React, { useEffect, useState } from 'react';
import { BatchPerformanceCard, BatchPerformanceCardProps } from './BatchPerformanceCard';
import { BatchFilter } from './BatchFilter';
import { PerformanceSummary } from './PerformanceSummary';  