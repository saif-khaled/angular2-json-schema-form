import { ComponentFactoryResolver } from '@angular/core';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { TemplateComponent } from './template.component';
export declare class SelectFrameworkComponent extends TemplateComponent {
    constructor(jsf: JsonSchemaFormService, componentFactory: ComponentFactoryResolver);
    protected createComponent(): void;
}
