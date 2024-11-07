package segments

import (
	"encoding/json"

	"github.com/jandedobbeleer/oh-my-posh/src/properties"
)

type JSONAPI struct {
	base

	URL    string
	Result map[string]interface{}
}

const (
	JSONAPIURL properties.Property = "api_url"
)

func (cs *JSONAPI) Template() string {
	return " {{ .Result }} "
}

func (cs *JSONAPI) Enabled() bool {
	url := cs.props.GetString(JSONAPIURL, "")
	if len(url) == 0 {
		return false
	}

	result, err := cs.getResult(url)
	if err != nil {
		return false
	}

	cs.Result = result
	return true
}

func (cs *JSONAPI) getResult(url string) (map[string]interface{}, error) {
	body, err := cs.env.HTTPRequest(url, nil, 10000)
	if err != nil {
		return nil, err
	}

	var result map[string]interface{}
	err = json.Unmarshal(body, &result)
	if err != nil {
		return nil, err
	}

	return result, nil
}
