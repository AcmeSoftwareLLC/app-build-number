# App Version Number

## Usage

```yaml
steps:
  - name: Generate
    id: generate
    uses: AcmeSoftwareLLC/app-version-number@v1
    with:
      timezone: Asia/Kathmandu

  - name: Display the generated build number
    run: echo "Build Number > ${{ steps.generate.outputs.build-number }}"
```