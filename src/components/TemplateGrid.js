import React from 'react';
import TemplateCard from './TemplateCard';

function TemplateGrid({ category }) {
    return (
        <div>
            <h4 className="mb-4">{category.name}</h4>
            <div className="row">
                {category.templates.map((template, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <TemplateCard template={template} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TemplateGrid;