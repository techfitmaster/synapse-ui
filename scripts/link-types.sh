#!/bin/bash
# Link @types/react from the consuming project to avoid duplicate type issues
# This script is run automatically after npm install

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SHARED_DIR="$(dirname "$SCRIPT_DIR")"
TYPES_DIR="$SHARED_DIR/node_modules/@types"

# Try to find @types/react from a sibling project (admin or portal)
for PROJECT in admin portal; do
  PROJECT_TYPES="$SHARED_DIR/../../$PROJECT/node_modules/@types/react"
  if [ -d "$PROJECT_TYPES" ] && [ ! -L "$TYPES_DIR/react" ]; then
    mkdir -p "$TYPES_DIR"
    rm -rf "$TYPES_DIR/react" "$TYPES_DIR/react-dom" 2>/dev/null
    ln -sf "$PROJECT_TYPES" "$TYPES_DIR/react"
    ln -sf "$(dirname "$PROJECT_TYPES")/react-dom" "$TYPES_DIR/react-dom"
    echo "@818/shared: linked @types/react from $PROJECT"
    break
  fi
done
