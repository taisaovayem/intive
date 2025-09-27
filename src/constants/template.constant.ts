import { Template } from "@/types/template";
import React from 'react';
import { BasicTemplate } from '../templates'
import { Invite } from "../types";

export const TEMPLATE: Record<Template, React.FC<Invite>> = {
    [Template.Basic]: BasicTemplate,
}