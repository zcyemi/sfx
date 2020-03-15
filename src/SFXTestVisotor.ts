import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SFXVisitor } from './sfx/SFXVisitor';

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
export class SFXTestVisotor extends AbstractParseTreeVisitor<number> implements SFXVisitor<number> {
    protected defaultResult(): number {
        return 0;
    }

}
