interface BatchFilterProps {
    onFilterChange: (filters: { status?: string; dateRange?: [Date, Date] }) => void;
}

export const BatchFilter: React.FC<BatchFilterProps> = ({ onFilterChange }) => {
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ status: e.target.value });
    };

    return (
        <div className="filter">
            <label>Estado:</label>
            <select onChange={handleStatusChange}>
                <option value="">Todos</option>
                <option value="activo">Activo</option>
                <option value="completado">Completado</option>
                <option value="pendiente">Pendiente</option>
            </select>
        </div>
    );
}; import React from 'react';